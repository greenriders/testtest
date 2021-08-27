import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from 'src/app/services/modele.service';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from './../../../entities/produit';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from 'src/app/entities/marque';
import { Modele } from 'src/app/entities/modele';

@Component({
  selector: 'app-modify-produits',
  templateUrl: './modify-produits.component.html',
  styleUrls: ['./modify-produits.component.scss'],
})
export class ModifyProduitsComponent implements OnInit {
  id: string = '';
  produit: Produit | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _produitService: ProduitService,
    private _modeleService: ModeleService,
    private _marqueService: MarqueService
  ) {}

  produitForm = new FormGroup({
    nom: new FormControl(null),
    marqueId: new FormControl(null),
    modeleId: new FormControl(null),
    codeEAN: new FormControl(null),
    longueur: new FormControl(null),
    largeur: new FormControl(null),
    hauteur: new FormControl(null),
    poids: new FormControl(null),
  });

  marques: Marque[] = [];
  modeles: Modele[] = [];

  getEffectiveValue(produit: any) {
    let result: any = {};
    for (let key of Object.keys(this.produitForm.controls)) {
      if (key in produit) result[key] = produit[key];
      else result[key] = null;
    }
    return result;
  }

  load() {
    this._produitService.getById(this.id).subscribe((data) => {
      this.produit = data;
      this.produitForm.setValue(this.getEffectiveValue(this.produit));
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });

    this._marqueService.getMarque().subscribe((data: any[]) => {
      this.marques = data;
    });
    this._modeleService.getModele().subscribe((data: any[]) => {
      this.modeles = data;
    });
  }

  posting = false;
  async updateProduit() {
    if (this.posting) return false;
    this.posting = true;

    const produit: Produit = this.produitForm.value;
    try {
      await this._produitService.update(this.id, produit)
      .toPromise()

      this.router.navigate(['/produits']);
    } catch {
      this.posting = false;
    }
    return
  }
}
