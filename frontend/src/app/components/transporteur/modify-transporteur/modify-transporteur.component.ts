import { TransporteurService } from '../../../services/transporteur.service';
import { Transporteur } from '../../../entities/transporteur';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-transporteur',
  templateUrl: './modify-transporteur.component.html',
  styleUrls: ['./modify-transporteur.component.scss']
})
export class ModifyTransporteurComponent implements OnInit {
  id: string = '';
  transporteur: Transporteur | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transporteurService: TransporteurService
  ) { }

  transporteurForm = new FormGroup({
    nom: new FormControl(null, [Validators.required]),
    urllink: new FormControl(null, [Validators.required]),
  });

  getEffectiveValue(transporteur: any) {
    let result: any = {};
    for (let key of Object.keys(this.transporteurForm.controls)) {
      if (key in transporteur) result[key] = transporteur[key];
      else result[key] = null;
    }
    return result;
  }

  load() {
    this.transporteurService.getById(this.id).subscribe((data) => {
      this.transporteur = data;
      this.transporteurForm.setValue(this.getEffectiveValue(this.transporteur))
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  posting = false;
  async update() {
    if (this.posting) return false;
    this.posting = true;

    const transporteur: Transporteur = this.transporteurForm.value;
    try {
      await this.transporteurService.update(this.id, transporteur)
      .toPromise()

      this.router.navigate(['/transporteur'])
    } catch {
      this.posting =false;
    }
    return
  }

}
