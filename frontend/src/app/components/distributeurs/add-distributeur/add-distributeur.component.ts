import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Distributeur } from 'src/app/entities/distributeur';
import { DistributeurService } from 'src/app/services/distributeur.service';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-add-distributeur',
  templateUrl: './add-distributeur.component.html',
  styleUrls: ['./add-distributeur.component.scss'],
})
export class AddDistributeurComponent implements OnInit {
  //!TODO VALIDATION
  distributeurForm = new FormGroup({
    nom: new FormControl(null, [Validators.required]),
    adresse: new FormControl(null, [Validators.required]),
    ville: new FormControl(null, [Validators.required]),
    codePostal: new FormControl(null, [Validators.required]),
    telephone: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    pays: new FormControl(null, [Validators.required]),
    ownerId: new FormControl(null, [Validators.required]),
  });

  clearInput() {
    this.distributeurForm.reset();
    for (let control in this.distributeurForm.controls) {
      this.distributeurForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.distributeurForm.controls[controlName].hasError(errorName);
  };

  professionnels: User[] = [];

  constructor(
    private _distributeurService: DistributeurService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getAvailableProfessionnel().subscribe((data: any[]) => {
      this.professionnels = data;
    })
   }

  posting = false;
  async addDistributeur() {
    if (this.posting) return false;
    this.posting = true;

    const distributeur: Distributeur = this.distributeurForm.value;
    try {
      await this._distributeurService.addDistributeur(distributeur)
        .toPromise()

      this.router.navigate(['/distributeurs']);
    } catch {
      this.posting = false;
    }
    return
  }
}
