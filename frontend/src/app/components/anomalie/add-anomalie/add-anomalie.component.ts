import { Router } from '@angular/router';
import { AnomalieCategory } from 'src/app/entities/anomalie-category';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Anomalie } from 'src/app/entities/anomalie';
import { AnomalieService } from 'src/app/services/anomalie.service';
import { AnomalieCategoryService } from 'src/app/services/anomalie-category.service';

@Component({
  selector: 'app-add-anomalie',
  templateUrl: './add-anomalie.component.html',
  styleUrls: ['./add-anomalie.component.scss']
})
export class AddAnomalieComponent implements OnInit {
  anomalieForm = new FormGroup({
    nom : new FormControl(null, [Validators.required]),
    prix : new FormControl(null, [Validators.required]),
    anomalieCategoryId : new FormControl(null, [Validators.required]),
  })

  clearInput() {
    this.anomalieForm.reset();
    for(let control in this.anomalieForm.controls) {
      this.anomalieForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.anomalieForm.controls[controlName].hasError(errorName);
  };

  // anomalie: Anomalie[] = []
  anomalieCategories: AnomalieCategory[] = []

  constructor(private _anomalieService: AnomalieService,
              private _anomalieCategoryService: AnomalieCategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this._anomalieCategoryService.get().subscribe((data: any[])=> {
      this.anomalieCategories = data
    })
  }

  // getAnomalie():void {
  //   this._anomalieService.get().subscribe((data: any[]) => {
  //     console.log(data)
  //     return this.anomalie = data
  //   })
  // }

  posting = false;
  async addAnomalie() {
    if (this.posting) return false;
    this.posting = true;

    const anomalie: Anomalie= this.anomalieForm.value;
    try {
      await this._anomalieService.addAnomalie(anomalie)
      .toPromise()
      this.router.navigate(['/anomalie'])
    } catch {
      this.posting = false;
    }
    return
  }

}
