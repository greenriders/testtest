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
      var dateDemande = moment(data.dateDemande);
      var dateSortie = moment(data.dateSortie);
      this.transactions = [
        { donnee: 'N° RMA', details: data.numRMA },
        { donnee: 'Code livraison', details: data.produit.codeEAN },
        { donnee: 'Durée reparation', details: `${dateSortie.diff(dateDemande, 'days')} days` },
        { donnee: 'N° tracking', details: "T5612792" },
        { donnee: 'Date d’arrivée', details: data.dateDemande },
        { donnee: 'Date de départ', details: data.dateSortie },
        { donnee: 'Proprietaire', details: "Gérard Dupas" },
        { donnee: 'Adresse e-mail', details: data.client.email },
        { donnee: 'Client', details: data.client.nom },
        { donnee: 'Tel.', details: data.client.telephone },
        { donnee: 'Adresset', details: data.client.adresse },
        { donnee: 'Ville', details: data.client.ville },
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
