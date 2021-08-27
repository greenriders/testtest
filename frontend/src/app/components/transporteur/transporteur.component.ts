import { Transporteur } from './../../entities/transporteur';
import { TransporteurService } from './../../services/transporteur.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-transporteur',
  templateUrl: './transporteur.component.html',
  styleUrls: ['./transporteur.component.scss']
})
export class TransporteurComponent implements OnInit {

  dialogRef!: MatDialogRef<DialogComponent>;

  transporteur: Transporteur[] = []

  columnNames: string[] = ['id','nom', 'urllink', 'modifier', 'effacer'];


  constructor( private transporteurService: TransporteurService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.transporteurService.get().subscribe((data: any[]) => {
      console.log(data);
      return (this.transporteur = data);
    });
  }

  onDeleteRequest(id: number){
    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false
    })
    this.dialogRef.afterClosed().subscribe(actionIfConfirmed => {
      if(actionIfConfirmed){
        this.delete(id)
      }
    })
  }

  isDeleting = false;

  delete(id: number): void {
    this.transporteurService.delete(id).subscribe((data: any) => {
      this.transporteur = this.transporteur.filter((e) => e.id != id);
    });
  }
}
