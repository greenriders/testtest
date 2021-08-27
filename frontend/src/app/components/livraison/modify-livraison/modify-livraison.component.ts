import { TransporteurService } from './../../../services/transporteur.service';
import { Transporteur } from './../../../entities/transporteur';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { demandeReparations } from 'src/app/entities/demands';
import { DemandereparationService } from 'src/app/services/demandereparation.service';

@Component({
  selector: 'app-modify-livraison',
  templateUrl: './modify-livraison.component.html',
  styleUrls: ['./modify-livraison.component.scss']
})
export class ModifyLivraisonComponent implements OnInit {
  id: string = '';
  livraison: demandeReparations | null = null;
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private _livraisonService: DemandereparationService,
    private transporteurservice: TransporteurService
  ) { }

  livraisonForm = new FormGroup({
    transporteurId : new FormControl(""),
    dureeReparation : new FormControl(""),
    numeroTracking : new FormControl(""),

  })

  transporteurs: Transporteur[] = []

  getEffectiveValue(livraison: any) {
    let result: any = {};
    for (let key of Object.keys(this.livraisonForm.controls)) {
      if (key in livraison) result[key] = livraison[key];
      else result[key] = null;
    }
    return result;
  }

  load() {
    this._livraisonService.getById(this.id).subscribe((data) => {
      this.livraison = data;
      this.livraisonForm.setValue(this.getEffectiveValue(this.livraison));
    });
    this.transporteurservice.get().subscribe((data:any[])=> {
      this.transporteurs = data
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  posting = false;
  async updateLivraison() {
    if (this.posting) return false;
    this.posting = true;

    const livraison: demandeReparations = this.livraisonForm.value;
    try {
      this._livraisonService.updateLivraison(this.id, livraison)
      .toPromise()

      this.router.navigate(['/livraison'])

    }catch {
      this.posting = false;
    }
    return
  }

}
