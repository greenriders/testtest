import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from 'src/app/entities/client';
import { Distributeur } from 'src/app/entities/distributeur';
import { ClientService } from 'src/app/services/client.service';
import { DistributeurService } from 'src/app/services/distributeur.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  //!TODO VALIDATION
  clientForm = new FormGroup({
    nom: new FormControl(null, [Validators.required]),
    prenom: new FormControl(null, [Validators.required]),
    telephone: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required , Validators.email]),
    adresse: new FormControl(null, [Validators.required]),
    ville: new FormControl(null, [Validators.required]),
    codePostal: new FormControl(null, [Validators.required]),
    pays: new FormControl(null, [Validators.required]),
    distributeurId: new FormControl(null, [Validators.required]),
  });

  clearInput() {
    this.clientForm.reset();
    for (let control in this.clientForm.controls) {
      this.clientForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.clientForm.controls[controlName].hasError(errorName);
  };

  distributeurs: Distributeur[] = [];

  constructor(private _clientService: ClientService,
    private _distributeurService: DistributeurService,
    private router : Router) { }

  ngOnInit(): void {
    this._distributeurService.getDistributeur().subscribe((data: any[]) => {
      this.distributeurs = data;
    });

  }


  posting = false;
  async addClient() {
    if (this.posting) return false;
    this.posting =true;


    const client: Client = this.clientForm.value;
    try{
      await this._clientService.addClient(client)
        .toPromise()

        this.router.navigate(['/clients']);
    } catch {
        this.posting = false;
    }
    return
  }
}
