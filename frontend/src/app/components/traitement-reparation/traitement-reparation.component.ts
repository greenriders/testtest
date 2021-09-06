import { Component, OnInit, ViewChild } from '@angular/core';
import { Etatproduit } from 'src/app/entities/etatproduit';
import { EtatproduitService } from 'src/app/services/etatproduit.service';
import { UserService } from 'src/app/services/user.service';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { demandeReparations } from 'src/app/entities/demands';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DistributeurService } from './../../services/distributeur.service';
import { Distributeur } from './../../entities/distributeur';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-traitement-reparation',
  templateUrl: './traitement-reparation.component.html',
  styleUrls: ['./traitement-reparation.component.scss']
})
export class TraitementReparationComponent implements OnInit {

  distributeurs: Distributeur[] = [];
  dialogRef!: MatDialogRef<DialogComponent>;

  traitements: demandeReparations[] = [];
  etatproduits: Etatproduit[] = [];
  techniciens: User[] = []
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource: any;
  columnNames: string[] = ['number', "numRMA", "datePriseEnCharge", "typologie", "typeGarantie", "technicienId", "etatProduitId", "accessoires", "emballage", "modifier"]

  constructor(private _traitementService: DemandereparationService,
    private etatproduitService: EtatproduitService,
    private _technicienService: UserService,
    private _distributeurService: DistributeurService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTraitement();

    this._technicienService.getAllTechnicien().subscribe((data: any[]) => {
      this.techniciens = data
    });

    this.etatproduitService.get().subscribe((data: any[]) => {
      this.etatproduits = data
    })

    this._distributeurService.getDistributeur().subscribe((data: any[]) => {
      this.distributeurs = data
    })
  }

  getTraitement() {
    this._traitementService.getDemandereparation().subscribe((data: any[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.traitements = data;
    });
  }

  getEtatProduitsName(id: number): string {
    let etat = '';
    this.etatproduits.forEach(item => {
      if (item.id === id) {
        etat = item.etat;
      }
    });
    return etat;
  }

  getDemandesByDistributeur(id: any): void {
    this._traitementService.getDemandesByDistributeur(id).subscribe((data: any[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.traitements = data;
    });
  }

  getTechniciensName(id: number): string {
    let nom = '';
    this.techniciens.forEach(item => {
      if (item.id === id) {
        nom = item.nom;
      }
    });
    return nom;
  }
}
