import { Anomalie } from './../../../entities/anomalie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AnomalieCategoryService } from 'src/app/services/anomalie-category.service';
import { AnomalieService } from 'src/app/services/anomalie.service';
import { AnomalieCategory } from 'src/app/entities/anomalie-category';

@Component({
  selector: 'app-modify-anomalie',
  templateUrl: './modify-anomalie.component.html',
  styleUrls: ['./modify-anomalie.component.scss'],
})
export class ModifyAnomalieComponent implements OnInit {
  id: string = '';
  anomalie: Anomalie | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _anomalieService: AnomalieService,
    private _anomalieCategoryService: AnomalieCategoryService
  ) {}

  anomalieForm = new FormGroup({
    nom: new FormControl(''),
    prix: new FormControl(''),
    anomalieCategoryId: new FormControl(''),
  });

  // anomalies: Anomalie[] = [];
  anomalieCategories: AnomalieCategory[] = [];


  getEffectiveValue(anomalie: any) {
    let result: any = {};
    for (let key of Object.keys(this.anomalieForm.controls)) {
      if (key in anomalie) result[key] = anomalie[key];
      else result[key] = null;
    }
    return result;
  }

  load() {

    this._anomalieService.getById(this.id).subscribe((data) => {
      this.anomalie = data;
      this.anomalieForm.setValue(this.getEffectiveValue(this.anomalie));
    });

    this._anomalieCategoryService.get().subscribe((data: any[])=> {
      this.anomalieCategories = data
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  posting = false;
  async updateAnomalie() {
    if (this.posting) return false;
    this.posting = true;

    const anomalie: Anomalie= this.anomalieForm.value;
    try {
      await this._anomalieService.updateAnomalie(this.id, anomalie)
      .toPromise()
      this.router.navigate(['/anomalie']);
    } catch {
      this.posting = false;
    }
    return
  }
}
