import { User } from './../../../entities/user';
import { UserService } from 'src/app/services/user.service';
import { EtatproduitService } from 'src/app/services/etatproduit.service';
import { Etatproduit } from './../../../entities/etatproduit';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { demandeReparations } from 'src/app/entities/demands';
import { Marque } from 'src/app/entities/marque';
import { Modele } from 'src/app/entities/modele';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from 'src/app/services/modele.service';

@Component({
  selector: 'app-modifytraitement',
  templateUrl: './modifytraitement.component.html',
  styleUrls: ['./modifytraitement.component.scss'],
})
export class ModifytraitementComponent implements OnInit {
  id: string = '';
  traitement: demandeReparations | null = null;
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private _traitementService: DemandereparationService,
    private _marqueService: MarqueService,
    private _modeleService: ModeleService,
    private _technicienService: UserService,
    private _etatproduitService: EtatproduitService
  ) {}

  traitementForm = new FormGroup({
    datePriseEnCharge: new FormControl(''),
    typologie: new FormControl(''),
    typeGarantie: new FormControl(''),
    technicienId: new FormControl(''),
    etatProduit: new FormControl(''),
    accessoires: new FormControl(''),
    emballage: new FormControl(''),
  });

  marques: Marque[] = [];
  modeles: Modele[] = [];
  techniciens: User[] = [];
  etatproduits: Etatproduit[] = [];

  getEffectiveValue(traitement: any) {
    let result: any = {};
    for (let key of Object.keys(this.traitementForm.controls)) {
      if (key in traitement) result[key] = traitement[key];
      else result[key] = null;
    }
    return result;
  }

  load() {
    this._traitementService.getById(this.id).subscribe((data) => {
      this.traitement = data;
      this.traitementForm.setValue(this.getEffectiveValue(this.traitement));
    });

    this._marqueService.getMarque().subscribe((data: any[]) => {
      this.marques = data;
    });

    this._modeleService.getModele().subscribe((data: any[]) => {
      this.modeles = data;
    });

    this._technicienService.getAllTechnicien().subscribe((data: any[]) => {
      this.techniciens = data;
    });


    this._etatproduitService.get().subscribe((data: any[]) => {
      this.etatproduits = data
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  posting = false;
  async updateTraitement() {
    if (this.posting) return false;
    this.posting = true;

    const traitement: demandeReparations = this.traitementForm.value;
    try {
      await this._traitementService.updateTraitement(this.id, traitement)
      .toPromise()

      this.router.navigate(['/traitementreparation'])
    } catch {
      this.posting = false;
    }
    return
  }
}
