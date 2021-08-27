import { Router } from '@angular/router';
import { InterventionService } from './../../../services/intervention.service';
import { Intervention } from './../../../entities/intervention';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',
  styleUrls: ['./add-intervention.component.scss']
})
export class AddInterventionComponent implements OnInit {
  interventionForm = new FormGroup({
    type: new FormControl(null, [Validators.required]),
  })

  clearInput() {
    this.interventionForm.reset();
    for (let control in this.interventionForm.controls) {
      this.interventionForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.interventionForm.controls[controlName].hasError(errorName);
  };

  // intervention: Intervention[] = []

  constructor(private _interventionService: InterventionService,
    private router : Router) { }

  ngOnInit(): void {
  }

  // get():void {
  //   this._interventionService.get().subscribe((data: any[]) => {
  //     console.log(data)
  //     return this.intervention = data
  //   })
  // }

  posting = false;
  async add() {
    if (this.posting) return false;
    this.posting = true;

    const intervention: Intervention= this.interventionForm.value;
    try {
      await this._interventionService.add(intervention)
      .toPromise()

      this.router.navigate(['/intervention']);
    } catch {
      this.posting = false;
    }
    return
  }
}
