import { Component, OnInit, ViewChild } from '@angular/core';
import { Transporteur } from './../../entities/transporteur';
import { TransporteurService } from './../../services/transporteur.service';
import { LivraisonService } from './../../services/livraison.service';
import { demandeReparations } from './../../entities/demands';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.scss']
})
export class LivraisonComponent implements OnInit {

  livraisons: demandeReparations[] = [];
  transporteurs: Transporteur[] = []
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource: any;
  columnNames: string[] = ["numRMA", "transporteurId", "dureeReparation", "numeroTracking", "modifier"]


  constructor(
    private _livraisonService: LivraisonService,
    private transporteurService: TransporteurService
  ) { }

  ngOnInit(): void {
    this.get();

    this.transporteurService.get().subscribe((data: any[]) => {
      return this.transporteurs = data
    })
  }

  get(): void {
    this._livraisonService.get().subscribe((data: any[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.livraisons = data;
    });
  }

  getTransporteurNom(id: number) {
    return this.transporteurs.find(e => e.id === id)?.nom;
  }
}
