import { Component, OnInit } from '@angular/core';
import { Marque } from './../../../entities/marque';
import { ModeleService } from './../../../services/modele.service';
import { MarqueService } from './../../../services/marque.service';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { demandeReparations } from 'src/app/entities/demands';
import { Produit } from 'src/app/entities/produit';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { ProduitService } from 'src/app/services/produit.service';
import { Modele } from 'src/app/entities/modele';
import { User } from 'src/app/entities/user';

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
    produitId: new FormControl(null, [Validators.required]),
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
  produits: Produit[] = [];


  constructor(
    private _demandereparationService: DemandereparationService,
    private marqueService: MarqueService,
    private modeleService: ModeleService,
    private _produitService: ProduitService,
    private httpClient: HttpClient,
    private router: Router,
    private authService: AuthService
    // private httpClient = HttpClient,
  ) { }

  ngOnInit(): void {
    this._produitService.getProduit().subscribe((data: any[]) => {
      this.produits = data;
    });

    this.marqueService.getMarque().subscribe((data: any[]) => {
      this.marques = data
    })

    this.modeleService.getModele().subscribe((data: any[]) => {
      this.modeles = data
    })

    /*const fd = new FormData();
    if (this.selectedFile != null) {
      fd.append('file', this.selectedFile, this.selectedFile.name)
    }
    this.httpClient.post('', fd)
      .subscribe((res: any) => {
        console.log(res)
      })*/
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

}
