
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Marque } from 'src/app/entities/marque';
import { MarqueService } from 'src/app/services/marque.service';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.scss'],
})
export class MarqueComponent implements OnInit {

  dialogRef!: MatDialogRef<DialogComponent>;

  marque: Marque[] = [];
  // Produits: Produit[] = [];

  columnNames: string[] = ['id','nom', 'modifier', 'effacer'];

  constructor(private _marqueService: MarqueService,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getMarque();
  }

  getMarque(): void {
    this._marqueService.getMarque().subscribe((data: any[]) => {
      console.log(data);
      return (this.marque = data);
    });
  }

  onDeleteRequest(id: number){
    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false
    })
    this.dialogRef.afterClosed().subscribe(actionIfConfirmed => {
      if(actionIfConfirmed){
        this.deleteMarque(id)
      }
    })
  }

  isDeleting = false;

  deleteMarque(id: number): void {
    this._marqueService.deleteMarque(id).subscribe((data: any) => {
      this.marque = this.marque.filter((e) => e.id != id);
    });
  }
}
