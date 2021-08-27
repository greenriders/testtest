import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Changement } from 'src/app/entities/changement';
import { ChangementService } from 'src/app/services/changement.service';

@Component({
  selector: 'app-add-changement',
  templateUrl: './add-changement.component.html',
  styleUrls: ['./add-changement.component.scss']
})
export class AddChangementComponent implements OnInit {
  changementForm = new FormGroup({
    nom: new FormControl(null, [Validators.required]),
  });

  clearInput() {
    this.changementForm.reset();
    for (let control in this.changementForm.controls) {
      this.changementForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.changementForm.controls[controlName].hasError(errorName);
  };

  constructor(private _changementService: ChangementService,
      private router: Router
      ) { }

  ngOnInit(): void {
  }

  posting = false;
  async addChangement() {
    if (this.posting) return false;
    this.posting = true;

    const changement: Changement = this.changementForm.value;
    try {
      await this._changementService.addChangement(changement)
      .toPromise()

      this.router.navigate(['/changement']);
    } catch {
      this.posting = false;
    }
    return
  }

}
