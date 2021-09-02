
import { Component, OnInit } from '@angular/core';
import { demandeReparations } from 'src/app/entities/demands';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { ActivatedRoute } from '@angular/router';

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
