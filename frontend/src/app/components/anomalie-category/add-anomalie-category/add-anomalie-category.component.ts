import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnomalieCategory } from 'src/app/entities/anomalie-category';
import { AnomalieCategoryService } from 'src/app/services/anomalie-category.service';

@Component({
  selector: 'app-add-anomalie-category',
  templateUrl: './add-anomalie-category.component.html',
  styleUrls: ['./add-anomalie-category.component.scss']
})
export class AddAnomalieCategoryComponent implements OnInit {
 // TO DO VALIDATION
 anomalieCategoryForm = new FormGroup({
    nom : new FormControl(null, [Validators.required]),
})

clearInput() {
  this.anomalieCategoryForm.reset();
  for (let control in this.anomalieCategoryForm.controls) {
    this.anomalieCategoryForm.controls[control].setErrors(null);
  }
}

public checkerror = (controlName: string, errorName: string) => {
  return this.anomalieCategoryForm.controls[controlName].hasError(errorName);
};

// anomalieCategory : AnomalieCategory[] = []

  constructor(private _anomalieCategoryService: AnomalieCategoryService,
    private router : Router) { }

  ngOnInit(): void {
  }

  // get():void {
  //   this._anomalieCategoryService.get().subscribe((data: any[]) => {
  //     console.log(data)
  //     return this.anomalieCategory = data
  //   })
  // }

  posting = false;
  async add() {
    if (this.posting) return false;
    this.posting = true;

    const anomalieCategory : AnomalieCategory = this.anomalieCategoryForm.value;
    try {
      await this._anomalieCategoryService.add(
        anomalieCategory
      ).toPromise()
        this.router.navigate(['/anomalie-categorty'])
    } catch {
      this.posting =false;
    }
    return
  }

}
