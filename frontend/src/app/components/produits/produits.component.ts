import { Modele } from 'src/app/entities/modele';
import { Marque } from 'src/app/entities/marque';
import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from 'src/app/services/modele.service';
import { ProduitService } from './../../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/entities/produit';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss'],
})
export class ProduitsComponent implements OnInit {

  dialogRef!: MatDialogRef<DialogComponent>;

  produit: Produit[] = [];
  marques: Marque[] = [];
  modeles: Modele[] = [];

  columnNames: string[] = ['id', 'nom', 'codeEAN', 'longueur', 'largeur', 'hauteur', 'poids', 'marqueId', 'modeleId', 'modifier', 'effacer'];

  constructor(
    private _produitService: ProduitService,
    private _marqueService: MarqueService,
    private _modeleService: ModeleService,
    public dialog: MatDialog

  ) {}

  ngOnInit(): void {
    this._marqueService.getMarque().subscribe((data: any[]) => {
      this.marques = data;
    });
    this._modeleService.getModele().subscribe((data: any[]) => {
      this.modeles = data;
    });
    this.getProduit();
  }

  getProduit(): void {
    this._produitService.getProduit().subscribe((data: any[]) => {
      console.log(data);
      return (this.produit = data);
    });
  }

  onDeleteRequest(id: number){
    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false
    })
    this.dialogRef.afterClosed().subscribe(actionIfConfirmed => {
      if(actionIfConfirmed){
        this.deleteProduit(id)
      }
    })
  }

  isDeleting = false;

  deleteProduit(id: number): void {
    this._produitService.deleteProduit(id).subscribe((data: any) => {
      this.produit = this.produit.filter((e) => e.id != id);
    });
  }
}
