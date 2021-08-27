import { Transporteur } from './../../entities/transporteur';
import { TransporteurService } from './../../services/transporteur.service';
import { LivraisonService } from './../../services/livraison.service';
import { demandeReparations } from './../../entities/demands';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.scss']
})
export class LivraisonComponent implements OnInit {

  livraisons: demandeReparations[] = [];
  transporteurs : Transporteur[] = []

  columnNames: string[] = ["numRMA", "transporteurId", "dureeReparation", "numeroTracking","modifier"]


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

  get():void {
    this._livraisonService.get().subscribe((data: any[]) => {
    console.log(data)
    return this.livraisons = data;
    });
  }

}
