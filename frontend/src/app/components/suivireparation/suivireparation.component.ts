import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { demandeReparations } from 'src/app/entities/demands';
import { DemandereparationService } from 'src/app/services/demandereparation.service';

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
  transactions: Transaction[] = [
    { donnee: 'N° RMA', details: "H2G5E6Z32" },
    { donnee: 'Code livraison', details: "359994" },
    { donnee: 'Durée reparation', details: "10 jours" },
    { donnee: 'N° tracking', details: "T5612792" },
    { donnee: 'Date d’arrivée', details: "08.02.2021" },
    { donnee: 'Date de départ', details: "18.02.2021" },
    { donnee: 'Proprietaire', details: "Gérard Dupas" },
    { donnee: 'Adresse e-mail', details: "dupas.gerard@mail.fr" },
    { donnee: 'Client', details: "Gregory WORTH" },
    { donnee: 'Tel.', details: "0665489732" },
    { donnee: 'Adresset', details: "2 rue de la Gare " },
    { donnee: 'Ville', details: " 75000 Paris " },
  ];
  id: string = "";
  demande: demandeReparations | null = null;
  // getTotalCost() {
  //   return this.transactions.map(t => t.details).reduce((acc, value) => acc + value, 0);
  // }

  constructor(private router: ActivatedRoute, private demandeService: DemandereparationService) { }

  load() {
    this.demandeService.getById(this.id).subscribe((data) => {
      this.demande = data;
    });

  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });

  }
}
