import { Client } from './../../../entities/client';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { DistributeurService } from 'src/app/services/distributeur.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Distributeur } from 'src/app/entities/distributeur';

@Component({
  selector: 'app-modify-client',
  templateUrl: './modify-client.component.html',
  styleUrls: ['./modify-client.component.scss']
})
export class ModifyClientComponent implements OnInit {
  id: string = '';
  client: Client | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _clientService: ClientService,
    private _distributeurService: DistributeurService
  ) { }

   //!TODO VALIDATION
   clientForm = new FormGroup({
    nom: new FormControl(null),
    prenom: new FormControl(null),
    telephone: new FormControl(null),
    email: new FormControl(null),
    adresse: new FormControl(null),
    ville: new FormControl(null),
    codePostal: new FormControl(null),
    pays: new FormControl(null),
    distributeurId: new FormControl(null),
  });

  distributeurs: Distributeur[] = [];

  getEffectiveValue(client: any) {
    let result: any = {};
    for (let key of Object.keys(this.clientForm.controls)) {
      if (key in client) result[key] = client[key];
      else result[key] = null;
    }
    return result;
  }

  load(){
    this._clientService.getById(this.id).subscribe((data) => {
      this.client = data;
      this.clientForm.setValue(this.getEffectiveValue(this.client));
    })
    this._distributeurService.getDistributeur().subscribe((data: any[]) => {
      this.distributeurs = data;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  posting = false;
  async updateClient() {
    if (this.posting) return false;
    this.posting =true;


    const client: Client = this.clientForm.value;
    try{
      await this._clientService.update(this.id, client)
        .toPromise()

        this.router.navigate(['/clients']);
    } catch {
        this.posting = false;
    }
    return
  }

}
