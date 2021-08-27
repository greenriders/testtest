import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnomalieCategory } from 'src/app/entities/anomalie-category';
import { AnomalieCategoryService } from 'src/app/services/anomalie-category.service';

@Component({
  selector: 'app-modify-anomalie-category',
  templateUrl: './modify-anomalie-category.component.html',
  styleUrls: ['./modify-anomalie-category.component.scss']
})
export class ModifyAnomalieCategoryComponent implements OnInit {
  id: string = '';
  anomalieCategory: AnomalieCategory | null = null;

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _anomalieCategoryService: AnomalieCategoryService) { }

 anomalieCategoryForm = new FormGroup({
  nom : new FormControl(""),
})

getEffectiveValue(anomalieCategory: any) {
  let result: any = {};
  for (let key of Object.keys(this.anomalieCategoryForm.controls)) {
    if (key in anomalieCategory) result[key] = anomalieCategory[key];
    else result[key] = null;
  }
  return result;
}

load() {
  this._anomalieCategoryService.getById(this.id).subscribe((data) => {
    this.anomalieCategory = data;
    this.anomalieCategoryForm.setValue(this.getEffectiveValue(this.anomalieCategory))
  })
}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  posting = false;
  async updateAnomalieCategory() {
    if (this.posting) return false;
    this.posting = true;

    const anomalieCategory : AnomalieCategory = this.anomalieCategoryForm.value;
    try {
      await this._anomalieCategoryService.update(this.id, anomalieCategory)
      .toPromise()
        this.router.navigate(['/anomalie-categorty'])
    } catch {
      this.posting =false;
    }
    return
  }

}
