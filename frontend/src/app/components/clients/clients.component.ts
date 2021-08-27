import { DistributeurService } from './../../services/distributeur.service';
import { Distributeur } from './../../entities/distributeur';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from 'src/app/entities/client';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {

  dialogRef!: MatDialogRef<DialogComponent>;

  client: Client[] = [];
  distributeurs: Distributeur[] = [];

  columnNames: string[] = [
    'id',
    'nom',
    'prenom',
    'telephone',
    'email',
    'adresse',
    'ville',
    'codePostal',
    'pays',
    'distributeurId',
    'modifier',
    'effacer',
  ];

  constructor(
    private _clientService: ClientService,
    private _distributeurService: DistributeurService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._distributeurService.getDistributeur().subscribe((data: any[]) => {
      this.distributeurs = data;
    });
    this.getClient();
  }

  getClient(): void {
    this._clientService.getClient().subscribe((data: any[]) => {
      console.log(data);
      return (this.client = data);
    });
  }

  onDeleteRequest(id: number){
    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false
    })
    this.dialogRef.afterClosed().subscribe(actionIfConfirmed => {
      if(actionIfConfirmed){
        this.deleteClient(id)
      }
    })
  }

  isDeleting = false;

  deleteClient(id: number): void {
    this._clientService.deleteClient(id).subscribe((data: any) => {
      this.client = this.client.filter((e) => e.id != id);
    });
  }
}
