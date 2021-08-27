import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from './../../../services/modele.service';
import { Modele } from './../../../entities/modele';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Marque } from 'src/app/entities/marque';

@Component({
  selector: 'app-modify-modele',
  templateUrl: './modify-modele.component.html',
  styleUrls: ['./modify-modele.component.scss']
})
export class ModifyModeleComponent implements OnInit {
  id: string = '';
  modele: Modele | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _modeleService: ModeleService,
    private _marqueService: MarqueService
  ) { }

  modeleForm = new FormGroup({
    nom: new FormControl(null),
    marqueId: new FormControl(null),
  });

  marques: Marque[] = [];

  getEffectiveValue(modele: any) {
    let result: any = {};
    for (let key of Object.keys(this.modeleForm.controls)) {
      if (key in modele) result[key] = modele[key];
      else result[key] = null;
    }
    return result;
  }

  load() {
    this._modeleService.getById(this.id).subscribe((data) => {
      this.modele = data;
      this.modeleForm.setValue(this.getEffectiveValue(this.modele))
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });

    this._marqueService.getMarque().subscribe((data: any[]) => {
      this.marques = data;
    });
  }

  posting = false;
  async updateModele() {
    if (this.posting) return false;
    this.posting = true;

    const modele: Modele = this.modeleForm.value;
    try {
      await this._modeleService.update(this.id, modele)
      .toPromise()

      this.router.navigate(['/modele']);
    } catch {
      this.posting = false;
    }
    return
  }

}
