import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Etatproduit } from 'src/app/entities/etatproduit';
import { EtatproduitService } from 'src/app/services/etatproduit.service';

@Component({
  selector: 'app-add-etatproduit',
  templateUrl: './add-etatproduit.component.html',
  styleUrls: ['./add-etatproduit.component.scss'],
})
export class AddEtatproduitComponent implements OnInit {
  //!TODO VALIDATION
  etatForm = new FormGroup({
    etat: new FormControl(null, [Validators.required]),
  });

  clearInput() {
    this.etatForm.reset();
    for (let control in this.etatForm.controls) {
      this.etatForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.etatForm.controls[controlName].hasError(errorName);
  };

  constructor(private _etatproduitService: EtatproduitService,
    private router: Router) {}

  ngOnInit(): void {}

  posting = false;
  async add() {
    if (this.posting) return false;
    this.posting = true;

    const etatproduit: Etatproduit = this.etatForm.value;
    try {
      await this._etatproduitService.add(etatproduit)
      .toPromise()

      this.router.navigate(['/etatproduit'])
    } catch {
      this.posting = false;
    }
    return
  }
}
