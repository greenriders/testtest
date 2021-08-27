import { Component, OnInit } from '@angular/core';
import { demandeReparations } from 'src/app/entities/demands';
import { DemandereparationService } from 'src/app/services/demandereparation.service';

@Component({
  selector: 'app-demand-pro',
  templateUrl: './demand-pro.component.html',
  styleUrls: ['./demand-pro.component.scss']
})
export class DemandProComponent implements OnInit {
  demandeReparations: demandeReparations[] = [];

  columnNames: string[] = ['numRMA', 'numeroSerie', 'produitId', 'distributeurId', 'clientId', 'dateDemande', 'dateAchat', 'panneClient', 'modifier', 'effacer', 'details'];

  constructor(private _demandereparationService: DemandereparationService) { }

  ngOnInit(): void {
  }

  getDemandePro(): void {
    this._demandereparationService.getDistributeurDemande()
      .subscribe((data: any[]) => {
        console.log("data", data);
        return this.demandeReparations = data;
      });
  }

}
