import { Router } from '@angular/router';
import { EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from 'src/app/entities/client';
import { demandeReparations } from 'src/app/entities/demands';
import { Distributeur } from 'src/app/entities/distributeur';
import { Produit } from 'src/app/entities/produit';
import { ClientService } from 'src/app/services/client.service';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { DistributeurService } from 'src/app/services/distributeur.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.scss'],
})
export class AddDemandeComponent implements OnInit {

  demandeForm = new FormGroup({
    numeroSerie: new FormControl(null, [Validators.required]),
    produitId: new FormControl(null, [Validators.required]),
    distributeurId: new FormControl(null, [Validators.required]),
    clientId: new FormControl(null),
    dateDemande: new FormControl(null, [Validators.required]),
    dateAchat: new FormControl(null, [Validators.required]),
    panneClient: new FormControl(null, [Validators.required]),

  });


  clearInput() {
    this.demandeForm.reset();
    for (let control in this.demandeForm.controls) {
      this.demandeForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.demandeForm.controls[controlName].hasError(errorName);
  };

  demandeReparations: demandeReparations[] = [];
  produits: Produit[] = [];
  distributeurs: Distributeur[] = [];
  clients: Client[] = [];

  constructor(
    private _demandereparationService: DemandereparationService,
    private _produitService: ProduitService,
    private _distributeurService: DistributeurService,
    private _clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._produitService.getProduit().subscribe((data: any[]) => {
      this.produits = data;
    });

    this._distributeurService.getDistributeur().subscribe((data: any[]) => {
      this.distributeurs = data;
    });

    this._clientService.getClient().subscribe((data: any[]) => {
      this.clients = data;
    });
  }

  getDemande(): void {
    this._demandereparationService
      .getDemandereparation()
      .subscribe((data: any[]) => {
        console.log(data);
        return (this.demandeReparations = data);
      });
  }

  posting = false;
  async addDemande(){
    console.log("valid", this.demandeForm.valid);
    if (!this.demandeForm.valid) {
      return;
    }
    if (this.posting) return false;
    this.posting = true;

    const demande: demandeReparations = this.demandeForm.value;
    try {
      await this._demandereparationService
      .addDemandereparation(demande)
      .toPromise()

      this.router.navigate(['/demandereparation']);
    } catch {
      this.posting = false;
    }
    return
  }
}
