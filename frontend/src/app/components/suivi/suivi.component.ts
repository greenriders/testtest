import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
export interface PeriodicElement {
  name: string;
  position: number;
  numeroRMA: string;
  situation: string;
  client: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Renault', numeroRMA: 'A5FZ255E1', situation: 'reparé', client: 'Gregory WORTH' },
  { position: 2, name: 'Renault', numeroRMA: 'A5FZ255E2', situation: 'reparé', client: 'Everett MOONEY'},
  {
    position: 3,
    name: 'Renault',
    numeroRMA: 'A5FZ255E3',
    situation: 'En attente de pièce',
    client: 'Laura PETERSON'
  },
  {
    position: 4,
    name: 'Renault',
    numeroRMA: 'A5FZ255E4',
    situation: 'En attente de pièce',
    client: 'Michael HAMPTON'
  },
  { position: 5, name: 'Renault', numeroRMA: 'A5FZ255E2', situation: 'reparé',client: 'Everett MOONEY' },
  {
    position: 6,
    name: 'Renault',
    numeroRMA: 'A5FZ255E5',
    situation: 'En reparation',
    client: 'Laura PETERSON'
  },
  { position: 7, name: 'Renault', numeroRMA: 'A5FZ255E2', situation: 'reparé',client: 'Gregory WORTH' },
  {
    position: 8,
    name: 'Renault',
    numeroRMA: 'A5FZ255E6',
    situation: 'En attente de pièce',
    client: 'Brian BAKER'
  },
  {
    position: 9,
    name: 'Renault',
    numeroRMA: 'A5FZ255E7',
    situation: 'En reparation',
    client: 'Michael HAMPTON'
  },
  {
    position: 10,
    name: 'Renault',
    numeroRMA: 'A5FZ255E8',
    situation: 'reparé',
    client: 'Laura PETERSON'
  },
];

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.scss'],
})
export class SuiviComponent implements OnInit {
  displayedColumns: string[] = ['position', 'numeroRMA', 'name', 'client', 'situation'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: any) {
    //console.log(filterValue);
    this.dataSource.filter = filterValue.value.trim().toLowerCase();
  }

  filterPredicate(data: PeriodicElement, filter: string): boolean {
    if (filter == '') return true;
    if (data.situation.search(filter) == -1) return false;
    return true;
  }

  constructor(
    private router: Router,
    private demandeService: DemandereparationService
  ) {}

  ngOnInit(): void {
    this.dataSource.filterPredicate = this.filterPredicate;

    this.demandeService.getDistributeurDemande().subscribe((demandes) => {
      console.log(demandes);
    });
  }
  redirectDetails(row: any) {
    console.log(row);
    this.router.navigate(['/suivireparation']);
  }
}
