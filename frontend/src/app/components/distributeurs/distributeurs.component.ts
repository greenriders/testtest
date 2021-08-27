import { UserService } from 'src/app/services/user.service';
import { DistributeurService } from './../../services/distributeur.service';
import { Distributeur } from './../../entities/distributeur';
import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-distributeurs',
  templateUrl: './distributeurs.component.html',
  styleUrls: ['./distributeurs.component.scss']
})
export class DistributeursComponent implements OnInit {

  dialogRef!: MatDialogRef<DialogComponent>;

  distributeur: Distributeur[] = []
  professionnels : User[] = []

  columnNames: string[] = ['id','nom', 'adresse', 'ville', 'codePostal', 'telephone', 'email', 'pays', 'ownerId', 'modifier', 'effacer'];


  constructor(private _distributeurService: DistributeurService,
              private professionnelService: UserService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDistributeur();

    this.professionnelService.getAvailableProfessionnel().subscribe((data: any[])=> {
      this.professionnels = data
    });
  }

  getDistributeur():void {
    this._distributeurService.getDistributeur().subscribe((data: any[]) => {
      console.log(data)
      return this.distributeur = data
    })
  }

  onDeleteRequest(id: number){
    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false
    })
    this.dialogRef.afterClosed().subscribe(actionIfConfirmed => {
      if(actionIfConfirmed){
        this.deleteDistributeur(id)
      }
    })
  }

  isDeleting = false;

  deleteDistributeur(id: number):void {
    this._distributeurService.deleteDistributeur(id).subscribe((data: any) => {
      this.distributeur = this.distributeur.filter(e => e.id != id);
    });
  }

}
