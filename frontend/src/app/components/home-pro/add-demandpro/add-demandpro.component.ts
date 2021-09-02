import { Component, OnInit } from '@angular/core';
import { Marque } from './../../../entities/marque';
import { ModeleService } from './../../../services/modele.service';
import { MarqueService } from './../../../services/marque.service';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { demandeReparations } from 'src/app/entities/demands';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { Modele } from 'src/app/entities/modele';
import { User } from 'src/app/entities/user';
import { SousMarque } from 'src/app/entities/sous-marque';
import { SousMarqueService } from 'src/app/services/sous-marque.service';

@Component({
  selector: 'app-add-demandpro',
  templateUrl: './add-demandpro.component.html',
  styleUrls: ['./add-demandpro.component.scss']
})


export class AddDemandproComponent implements OnInit {

  demandeProForm = new FormGroup({
    numeroSerie: new FormControl(null, [Validators.required]),
    marqueId: new FormControl(null, [Validators.required]),
    modeleId: new FormControl(''),
    sousMarqueId: new FormControl(null, [Validators.required]),
    accessoire: new FormControl(''),
    dateDemande: new FormControl(null, [Validators.required]),
    dateAchat: new FormControl(null, [Validators.required]),
    emballage: new FormControl(''),
    factureAchat: new FormControl(''),
    panneClient: new FormControl(null, [Validators.required]),
    clientNom: new FormControl(''),
    clientEmail: new FormControl(''),
  });



  clearInput() {
    this.demandeProForm.reset();
    for (let control in this.demandeProForm.controls) {
      this.demandeProForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.demandeProForm.controls[controlName].hasError(errorName);
  };

  selectedFiles: File[] = [];
  onFilesSelected(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.selectedFiles.push(event.target.files[i]);
    }
  }

  selectedImages: File[] = [];
  onImagesSelected(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.selectedImages.push(event.target.files[i]);
    }
  }


  marques: Marque[] = [];
  modeles: Modele[] = [];
  sousMarque: SousMarque[] = [];

  constructor(
    private _demandereparationService: DemandereparationService,
    private marqueService: MarqueService,
    private modeleService: ModeleService,
    private sousMarqueService: SousMarqueService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.marqueService.getMarque().subscribe((data: any[]) => {
      this.marques = data
    })
  }


  posting = false;
  async addDemandePro() {
    console.log(this.demandeProForm.valid);
    if (!this.demandeProForm.valid) {
      return;
    }
    if (this.posting) return false;
    this.posting = true;
    const user: User = await this.authService.getUser();
    const demande: demandeReparations = {
      ...this.demandeProForm.value, clientEmail: user.email, bill: this.selectedFiles, images: this.selectedImages
    };
    try {
      await this._demandereparationService
        .addDemandePro(demande)
        .toPromise()

      this.router.navigate(['/homepro']);
    } catch {
      this.posting = false;
    }
    return
  }

  onMarqueChange() {
    const marqueId = this.demandeProForm.get('marqueId')?.value;
    this.sousMarqueService.getById(marqueId).subscribe((data: any[]) => {
      this.sousMarque = data;
    });
  }

  onSousMarqueChange() {
    const sousMarqueId = this.demandeProForm.get('sousMarqueId')?.value;
    this.modeleService.getBySousMarqueId(sousMarqueId).subscribe((data: any[]) => {
      this.modeles = data
    })
  }
}
