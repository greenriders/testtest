import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import * as moment from 'moment';
import { DemandeStatus } from '../../entities/demande-status.enum';
export interface Transaction {
  donnee: string;
  details: string;
}
@Component({
  selector: 'app-suivireparation',
  templateUrl: './suivireparation.component.html',
  styleUrls: ['./suivireparation.component.scss'],

})
export class SuivireparationComponent implements OnInit {

  displayedColumns: string[] = ['donnee', 'details'];
  id: string = "";
  transactions: Transaction[] = [];
  demande: any;
  

  constructor(private router: ActivatedRoute, private demandeService: DemandereparationService) { }

  load() {
    this.demandeService.getById(this.id).subscribe((data) => {
      this.demande = data;
      this.transactions = [
        { donnee: 'N° RMA', details: data.numRMA },
        { donnee: 'N° tracking', details: data.numeroTracking },
        { donnee: 'N° serie', details: data.numeroSerie },
        { donnee: 'Modele', details: data.produit.modele?.nom },
        { donnee: 'Marque', details: data.produit.modele?.marque?.nom },
        { donnee: 'Date d’arrivée', details: data.dateDemande },
        { donnee: 'Date de départ', details: data.dateSortie },
        { donnee: 'Client', details: data.client?.nom },
        { donnee: 'Client e-mail', details: data.client?.email },
        { donnee: 'l panne fini', details: data.panneClient },
        { donnee: 'type Garantie', details: data.typeGarantie },
        { donnee: 'accessoires', details: data.accessoires },
        { donnee: 'changement', details: data.changement },
        { donnee: 'has Images', details: data.hasImages },
        { donnee: 'has Bills', details: data.hasBills }
      ];
    });

  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  getDemandeStatus(): number {
    if (this.demande.status === DemandeStatus.Recu) {
      return 1;
    }
    else if (this.demande.status === DemandeStatus.Reparation) {
      return 2;
    }
    else if (this.demande.status === DemandeStatus.Repare) {
      return 3;
    }
    else {
      return 4;
    }
  }
}
