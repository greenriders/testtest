import { MarqueService } from 'src/app/services/marque.service';
import { Marque } from './../../entities/marque';
import { Component, OnInit } from '@angular/core';
import { Modele } from 'src/app/entities/modele';
import { ModeleService } from 'src/app/services/modele.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.scss'],
})
export class ModeleComponent implements OnInit {

  dialogRef!: MatDialogRef<DialogComponent>;

  modele: Modele[] = [];
  marques: Marque[] = [];

  columnNames: string[] = ['id', 'nom', 'marqueId', 'modifier', 'effacer'];

  constructor(
    private _modeleService: ModeleService,
    private _marqueService: MarqueService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._marqueService.getMarque().subscribe((data: any[]) => {
      this.marques = data;
    });
    this.getModele();
  }

  getModele(): void {
    this._modeleService.getModele().subscribe((data: any[]) => {
      console.log(data);
      return (this.modele = data);
    });
  }

  onDeleteRequest(id: number){
    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false
    })
    this.dialogRef.afterClosed().subscribe(actionIfConfirmed => {
      if(actionIfConfirmed){
        this.deleteModele(id)
      }
    })
  }

  isDeleting = false;

  deleteModele(id: number): void {
    this._modeleService.deleteModele(id).subscribe((data: any) => {
      this.modele = this.modele.filter((e) => e.id != id);
    });
  }
}
