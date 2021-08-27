import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { Distributeur } from 'src/app/entities/distributeur';
import { Produit } from 'src/app/entities/produit';
import { ClientService } from 'src/app/services/client.service';
import { DistributeurService } from 'src/app/services/distributeur.service';
import { ProduitService } from 'src/app/services/produit.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { demandeReparations } from 'src/app/entities/demands';
import { Client } from 'src/app/entities/client';

@Component({
  selector: 'app-modify-demande-reparation',
  templateUrl: './modify-demande-reparation.component.html',
  styleUrls: ['./modify-demande-reparation.component.scss']
})
export class ModifyDemandeReparationComponent implements OnInit {
  id: string = '';
  demande: demandeReparations | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _demandeService: DemandereparationService,
    private _produitService: ProduitService,
    private _distributeurService:  DistributeurService,
    private _clientService: ClientService
  ) { }

  demandeForm = new FormGroup({
    numRMA : new FormControl(''),
    numeroSerie : new FormControl(''),
    produitId: new FormControl(''),
    distributeurId:new FormControl(''),
    clientId: new FormControl(''),
    dateDemande: new FormControl(''),
    dateAchat: new FormControl(''),
    panneClient: new FormControl(''),
    // estTraite: new FormControl(null),
    });

    produits: Produit[] = [];
    distributeurs: Distributeur[] = [];
    clients: Client[] = [];

    getEffectiveValue(demande: any) {
      let result: any = {};
      for (let key of Object.keys(this.demandeForm.controls)) {
        if (key in demande) result[key] = demande[key];
        else result[key] = null;
      }
      return result;
    }

    load() {
      this._demandeService.getById(this.id).subscribe((data) => {
        this.demande = data;
        this.demandeForm.setValue(this.getEffectiveValue(this.demande))
      });

      this._produitService.getProduit().subscribe((data: any[]) => {
        this.produits= data;
      })

      this._distributeurService.getDistributeur().subscribe((data: any[]) => {
        this.distributeurs= data;
      })

      this._clientService.getClient().subscribe((data: any[]) => {
        this.clients= data;
      })
    }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  posting = false;
  async updateDemande() {
    if (this.posting) return false;
    this.posting = true;

    const demande: demandeReparations = this.demandeForm.value;
    try {
      await this._demandeService.update(this.id, demande)
      .toPromise()

      this.router.navigate(['/demandereparation']);
    } catch {
      this.posting =false;
    }
    return
  }

}
