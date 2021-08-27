import { EtatproduitService } from './../../services/etatproduit.service';
import { Etatproduit } from './../../entities/etatproduit';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-etatproduit',
  templateUrl: './etatproduit.component.html',
  styleUrls: ['./etatproduit.component.scss']
})
export class EtatproduitComponent implements OnInit {

  dialogRef!: MatDialogRef<DialogComponent>;

  etat: Etatproduit[] = [];

  columnNames: string[] = ['id','etat','modifier', 'effacer'];


  constructor(private _etatproduitService: EtatproduitService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this._etatproduitService.get().subscribe((data: any[]) => {
      console.log(data);
      return this.etat = data;
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
    this._etatproduitService.delete(id).subscribe((data: any) => {
      this.etat = this.etat.filter((e) => e.id != id);
    });
  }

}
