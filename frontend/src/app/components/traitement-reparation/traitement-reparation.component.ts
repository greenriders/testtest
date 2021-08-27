import { Etatproduit } from 'src/app/entities/etatproduit';
import { EtatproduitService } from 'src/app/services/etatproduit.service';
import { User } from './../../entities/user';
import { UserService } from 'src/app/services/user.service';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { Component, OnInit } from '@angular/core';
import { demandeReparations } from 'src/app/entities/demands';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-traitement-reparation',
  templateUrl: './traitement-reparation.component.html',
  styleUrls: ['./traitement-reparation.component.scss']
})
export class TraitementReparationComponent implements OnInit {

  dialogRef!: MatDialogRef<DialogComponent>;

  traitements : demandeReparations[] = [];
  etatproduits: Etatproduit[] = [];
  techniciens : User[] = []

  columnNames: string[] = ["numRMA", "datePriseEnCharge", "typologie", "typeGarantie", "technicienId", "etatProduitId", "accessoires", "emballage", "modifier"]

  constructor(private _traitementService: DemandereparationService,
              private etatproduitService: EtatproduitService,
              private _technicienService: UserService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTraitement();

    this._technicienService.getAllTechnicien().subscribe((data: any[])=> {
      this.techniciens = data
    });

    this.etatproduitService.get().subscribe((data: any[]) => {
      this.etatproduits = data
    })

  }

  getTraitement():void {
    this._traitementService.getDemandereparation().subscribe((data: any[]) => {
    console.log(data)
    return this.traitements = data;
    });
  }

}
