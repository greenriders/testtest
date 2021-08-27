import { ProduitService } from 'src/app/services/produit.service';
import { MarqueService } from 'src/app/services/marque.service';
import { Marque } from './../../../entities/marque';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/entities/produit';

@Component({
  selector: 'app-modify-marque',
  templateUrl: './modify-marque.component.html',
  styleUrls: ['./modify-marque.component.scss']
})
export class ModifyMarqueComponent implements OnInit {
  id: string = '';
  marque: Marque | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _marqueService: MarqueService,
    private produitService: ProduitService
  ) { }

  marqueForm = new FormGroup({
    nom: new FormControl(null),
    // produitId: new FormControl(null, [Validators.required])
  });

  // produits: Produit[] = [];

  getEffectiveValue(marque: any) {
    let result: any = {};
    for (let key of Object.keys(this.marqueForm.controls)) {
      if (key in marque) result[key] = marque[key];
      else result[key] = null;
    }
    return result;
  }

  load() {
    this._marqueService.getById(this.id).subscribe((data) => {
      this.marque = data;
      this.marqueForm.setValue(this.getEffectiveValue(this.marque))
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
    // this.produitService.getProduit().subscribe((data: any[]) => {
    //   this.produits = data;
    // });
  }

  posting = false;
  async updateMarque() {
    if (this.posting) return false;
    this.posting = true;

    const marque: Marque = this.marqueForm.value;
    try {
      await this._marqueService.update(this.id, marque)
      .toPromise()

      this.router.navigate(['/marque'])
    } catch {
      this.posting =false;
    }
    return
  }

}
