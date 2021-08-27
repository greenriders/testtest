import { EtatproduitService } from 'src/app/services/etatproduit.service';
import { Etatproduit } from './../../../entities/etatproduit';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-etatproduit',
  templateUrl: './modify-etatproduit.component.html',
  styleUrls: ['./modify-etatproduit.component.scss']
})
export class ModifyEtatproduitComponent implements OnInit {
  id: string = '';
  etaitproduit: Etatproduit | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _etatproduitService: EtatproduitService
  ) { }

  etatForm = new FormGroup({
    etat: new FormControl(null),
  });


  getEffectiveValue(etatproduit: any) {
    let result: any = {};
    for (let key of Object.keys(this.etatForm.controls)) {
      if (key in etatproduit) result[key] = etatproduit[key];
      else result[key] = null;
    }
    return result;
  }

  load() {
    this._etatproduitService.getById(this.id).subscribe((data) => {
      this.etaitproduit = data;
      this.etatForm.setValue(this.getEffectiveValue(this.etaitproduit))
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  posting = false;
  async updateEtat() {
    if (this.posting) return false;
    this.posting = true;

    const etatproduit: Etatproduit = this.etatForm.value;
    try {
      await this._etatproduitService.update(this.id, etatproduit)
      .toPromise()

      this.router.navigate(['/etatproduit']);
    } catch {
      this.posting = false;
    }
    return
  }

}
