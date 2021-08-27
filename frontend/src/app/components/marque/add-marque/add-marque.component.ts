import { ProduitService } from './../../../services/produit.service';
import { Produit } from './../../../entities/produit';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Marque } from 'src/app/entities/marque';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marque.component.html',
  styleUrls: ['./add-marque.component.scss'],
})
export class AddMarqueComponent implements OnInit {
  
  marqueForm = new FormGroup({
    nom: new FormControl(null, [Validators.required]),
    // produitId: new FormControl(null, [Validators.required])
  });

  clearInput() {
    this.marqueForm.reset();
    for (let control in this.marqueForm.controls) {
      this.marqueForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.marqueForm.controls[controlName].hasError(errorName);
  };

  produits: Produit[] = [];

  constructor(private _marqueService: MarqueService,
    private produitService : ProduitService,
    private router: Router) {}

  ngOnInit(): void {
    // this.produitService.getProduit().subscribe((data: any[]) => {
    //   this.produits = data;
    // });
  }


  posting = false;
  async addMarque() {
    if (this.posting) return false;
    this.posting = true;

    const marque: Marque = this.marqueForm.value;
     try {
      await this._marqueService.addMarque(marque)
      .toPromise()

      this.router.navigate(['/marque'])
     } catch {
       this.posting = false;
     }
     return
  }
}
