import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Marque } from 'src/app/entities/marque';
import { Modele } from 'src/app/entities/modele';
import { Produit } from 'src/app/entities/produit';
import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from 'src/app/services/modele.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {
   //!TODO VALIDATION
   produitForm = new FormGroup({
    nom: new FormControl(null, Validators.required),
    marqueId: new FormControl(null, Validators.required),
    modeleId: new FormControl(null, Validators.required),
    codeEAN: new FormControl(null, Validators.required),
    longueur: new FormControl(null, Validators.required),
    largeur: new FormControl(null, Validators.required),
    hauteur: new FormControl(null, Validators.required),
    poids: new FormControl(null, Validators.required),
  });

  clearInput() {
    this.produitForm.reset();
    for (let control in this.produitForm.controls) {
      this.produitForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.produitForm.controls[controlName].hasError(errorName);
  };

  marques: Marque[] = [];
  modeles: Modele[] = [];
  constructor(
    private _produitService: ProduitService,
    private _marqueService: MarqueService,
    private _modeleService: ModeleService,
    private router: Router
  ) {

   }

  ngOnInit(): void {
    this._marqueService.getMarque().subscribe((data: any[]) => {
      this.marques = data;
    });
    this._modeleService.getModele().subscribe((data: any[]) => {
      this.modeles = data;
    });
  }

  posting = false;
  async addProduit() {
    if (this.posting) return false;
    this.posting = true;

    const produit: Produit = this.produitForm.value;
    try {
      await this._produitService.addProduit(produit)
      .toPromise()

      this.router.navigate(['/produits']);
    } catch {
      this.posting = false;
    }
    return
  }

}
