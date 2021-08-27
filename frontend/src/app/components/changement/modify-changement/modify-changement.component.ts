import { Changement } from './../../../entities/changement';
import { Component, OnInit } from '@angular/core';
import { ChangementService } from 'src/app/services/changement.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-changement',
  templateUrl: './modify-changement.component.html',
  styleUrls: ['./modify-changement.component.scss'],
})
export class ModifyChangementComponent implements OnInit {
  id: string = '';
  changement: Changement | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _changementService: ChangementService
  ) {}

  changementForm = new FormGroup({
    nom: new FormControl(null),
  });

  getEffectiveValue(changement: any) {
    let result: any = {};
    for (let key of Object.keys(this.changementForm.controls)) {
      if (key in changement) result[key] = changement[key];
      else result[key] = null;
    }
    return result;
  }

  load() {
    this._changementService.getById(this.id).subscribe((data) => {
      this.changement = data;
      this.changementForm.setValue(this.getEffectiveValue(this.changement));
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  posting = false;
  async updateChangement() {
    if (this.posting) return false;
    this.posting = true;

    const changement: Changement = this.changementForm.value;
    try {
     await this._changementService.update(this.id, changement)
      .toPromise()

      this.router.navigate(['/changement'])
    } catch {
      this.posting = false;
    }
    return
  }
}
