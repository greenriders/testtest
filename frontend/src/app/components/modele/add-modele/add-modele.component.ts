import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Marque } from 'src/app/entities/marque';
import { Modele } from 'src/app/entities/modele';
import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from 'src/app/services/modele.service';

@Component({
  selector: 'app-add-modele',
  templateUrl: './add-modele.component.html',
  styleUrls: ['./add-modele.component.scss']
})
export class AddModeleComponent implements OnInit {
  modeleForm = new FormGroup({
    nom: new FormControl(null, [Validators.required]),
    marqueId: new FormControl(null, [Validators.required]),
  });

  clearInput() {
    this.modeleForm.reset();
    for (let control in this.modeleForm.controls) {
      this.modeleForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.modeleForm.controls[controlName].hasError(errorName);
  };

  marques: Marque[] = [];

  constructor(private _modeleService: ModeleService,
    private _marqueService: MarqueService,
    private router: Router) { }

  ngOnInit(): void {
    this._marqueService.getMarque().subscribe((data: any[]) => {
      this.marques = data;
    });
  }

  posting = false;
  async addModele() {
    if (this.posting) return false;
    this.posting = true;

    const modele: Modele = this.modeleForm.value;
    try {
      await this._modeleService.addModele(modele)
      .toPromise()

      this.router.navigate(['/modele']);
    } catch {
      this.posting = false;
    }
    return
  }

}
