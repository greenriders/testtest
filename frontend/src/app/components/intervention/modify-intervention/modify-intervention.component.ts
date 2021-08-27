import { Intervention } from './../../../entities/intervention';
import { InterventionService } from './../../../services/intervention.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-intervention',
  templateUrl: './modify-intervention.component.html',
  styleUrls: ['./modify-intervention.component.scss']
})
export class ModifyInterventionComponent implements OnInit {
  id: string = '';
  intervention: Intervention | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _interventionService: InterventionService
  ) { }

  interventionForm = new FormGroup({
    type: new FormControl(null),
  })

  getEffectiveValue(intervention: any) {
    let result: any = {};
    for (let key of Object.keys(this.interventionForm.controls)) {
      if (key in intervention) result[key] = intervention[key];
      else result[key] = null;
    }
    return result;
  }

  load() {
    this._interventionService.getById(this.id).subscribe((data) => {
      this.intervention = data;
      this.interventionForm.setValue(this.getEffectiveValue(this.intervention))
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  posting = false;
  async updateIntervention() {
    if (this.posting) return false;
    this.posting = true;

    const intervention: Intervention = this.interventionForm.value;
    try {
      await this._interventionService.update(this.id, intervention)
      .toPromise()

      this.router.navigate(['/intervention']);
    } catch {
      this.posting = false;
    }
    return
  }

}
