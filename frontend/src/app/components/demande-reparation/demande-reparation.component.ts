import { Component, ViewChild, OnInit } from '@angular/core';
import { demandeReparations } from './../../entities/demands';
import { ClientService } from './../../services/client.service';
import { DistributeurService } from './../../services/distributeur.service';
import { Distributeur } from './../../entities/distributeur';
import { ProduitService } from './../../services/produit.service';
import { Produit } from './../../entities/produit';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { Client } from 'src/app/entities/client';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-demande-reparation',
  templateUrl: './demande-reparation.component.html',
  styleUrls: ['./demande-reparation.component.scss'],
})

export class DemandeReparationComponent implements OnInit {

  dataRow: any;

  dialogRef!: MatDialogRef<DialogComponent>;

  demandeReparations: demandeReparations[] = [];
  produits: Produit[] = [];
  distributeurs: Distributeur[] = [];
  clients: Client[] = []
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource: any;
  columnNames: string[] = ['number', 'numRMA', 'numeroSerie', 'produitId', 'distributeurId', 'clientId', 'dateDemande', 'dateAchat', 'panneClient', 'modifier', 'effacer', 'details'];

  constructor(private _demandereparationService: DemandereparationService,
    private _produitService: ProduitService,
    private _distributeurService: DistributeurService,
    private _clientService: ClientService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this._produitService.getProduit().subscribe((data: any[]) => {
      this.produits = data
    });

    this._distributeurService.getDistributeur().subscribe((data: any[]) => {
      this.distributeurs = data
    })

    this._clientService.getClient().subscribe((data: any[]) => {
      this.clients = data
    })

    this.getDemande();


    this.dataRow = this._demandereparationService.dataRow
  }

  getDemandePro(): void {
    this._demandereparationService.getDistributeurDemande()
      .subscribe((data: any[]) => {
        console.log("data", data);
        return this.demandeReparations = data;
      });
  }

  getDemande(): void {
    this._demandereparationService.getDemandereparation().subscribe((data: any[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.demandeReparations = data;
    });
  }

  onDeleteRequest(id: number) {
    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false
    })
    this.dialogRef.afterClosed().subscribe(actionIfConfirmed => {
      if (actionIfConfirmed) {
        this.deleteDemande(id)
      }
    })
  }

  isDeleting = false;

  deleteDemande(id: number): void {
    this._demandereparationService.deleteDemandereparation(id).subscribe((data: any[]) => {
      this.demandeReparations = this.demandeReparations.filter((e) => e.id != id);
    });
  }

  // getRecord(row : any) {
  //   this._demandereparationService.dataRow = row
  //   this.router.navigate(['details'])
  // }

}
