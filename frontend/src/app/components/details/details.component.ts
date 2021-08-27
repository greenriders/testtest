
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/entities/client';
import { demandeReparations } from 'src/app/entities/demands';
import { Distributeur } from 'src/app/entities/distributeur';
import { Produit } from 'src/app/entities/produit';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: string = '';

  demandeReparation?: any = undefined;
  // produits: Produit[] = [];
  // distributeurs: Distributeur[] = [];
  // clients: Client[] = []

  constructor(private _demandereparationService: DemandereparationService,
    private router: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params.id;
    });
    this.getDemande(this.id);
  }

  getDemande(id: string): void {
    this._demandereparationService.getById(id).subscribe((data: demandeReparations) => {
      console.log("data", data)
      this.demandeReparation = data;
    });
  }

}
