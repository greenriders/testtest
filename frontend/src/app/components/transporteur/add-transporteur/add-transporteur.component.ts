import { Transporteur } from './../../../entities/transporteur';
import { TransporteurService } from './../../../services/transporteur.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-transporteur',
  templateUrl: './add-transporteur.component.html',
  styleUrls: ['./add-transporteur.component.scss'],
})
export class AddTransporteurComponent implements OnInit {
  transporteurForm = new FormGroup({
    nom: new FormControl(null, [Validators.required]),
    urllink: new FormControl(null, [Validators.required]),
  });

  clearInput() {
    this.transporteurForm.reset();
    for (let control in this.transporteurForm.controls) {
      this.transporteurForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.transporteurForm.controls[controlName].hasError(errorName);
  };
  constructor(
    private TransporteurService: TransporteurService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  posting = false;
  async add() {
    if (this.posting) return false;
    this.posting = true;

    const transporteur: Transporteur = this.transporteurForm.value;
     try {
      await this.TransporteurService.add(transporteur)
      .toPromise()

      this.router.navigate(['/transporteur'])
     } catch {
       this.posting = false;
     }
     return
  }
}
