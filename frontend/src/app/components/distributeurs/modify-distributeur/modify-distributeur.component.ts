import { DistributeurService } from 'src/app/services/distributeur.service';
import { Distributeur } from './../../../entities/distributeur';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-distributeur',
  templateUrl: './modify-distributeur.component.html',
  styleUrls: ['./modify-distributeur.component.scss']
})
export class ModifyDistributeurComponent implements OnInit {
  id: string = '';
  distributeur: Distributeur | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _distributeurService: DistributeurService
  ) { }

  distributeurForm = new FormGroup({
    nom : new FormControl(null),
    adresse : new FormControl(null),
    ville : new FormControl(null),
    codePostal : new FormControl(null),
    telephone : new FormControl(null),
    email : new FormControl(null),
    pays : new FormControl(null),
  });

  getEffectiveValue(distributeur: any) {
    let result: any = {};
    for (let key of Object.keys(this.distributeurForm.controls)) {
      if (key in distributeur) result[key] = distributeur[key];
      else result[key] = null;
    }
    return result;
  }

  load() {
    this._distributeurService.getById(this.id).subscribe((data) => {
      this.distributeur = data;
      this.distributeurForm.setValue(this.getEffectiveValue(this.distributeur))
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  posting = false;
  async updateDistributeur() {
    if (this.posting) return false;
    this.posting = true;

    const distributeur: Distributeur = this.distributeurForm.value;
    try {
      await this._distributeurService.update(this.id, distributeur)
        .toPromise()

      this.router.navigate(['/distributeurs']);
    } catch {
      this.posting = false;
    }
    return
  }

}
