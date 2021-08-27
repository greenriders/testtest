import { AnomalieService } from 'src/app/services/anomalie.service';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Changement } from 'src/app/entities/changement';
import { demandeReparations } from 'src/app/entities/demands';
import { Intervention } from 'src/app/entities/intervention';
import { ChangementService } from 'src/app/services/changement.service';
import { InterventionService } from 'src/app/services/intervention.service';
import { AnomalieCategoryService } from 'src/app/services/anomalie-category.service';
import { Anomalie } from 'src/app/entities/anomalie';

@Component({
  selector: 'app-modify-fichereparation',
  templateUrl: './modify-fichereparation.component.html',
  styleUrls: ['./modify-fichereparation.component.scss'],
})
export class ModifyFichereparationComponent implements OnInit {
  id: string = '';
  fichereparation: demandeReparations | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _fichereparationService: DemandereparationService,
    private _anomalieService: AnomalieService,
    private _interventionService: InterventionService,
    private _changementService: ChangementService
  ) {}

  fichereparationForm = new FormGroup({
    anomaliesIds: new FormControl(''),
    interventionId: new FormControl(''),
    changementId: new FormControl(''),
    note: new FormControl(''),
    dateSortie: new FormControl(''),
  });

  anomalies: Anomalie[] = [];
  interventions: Intervention[] = [];
  changements: Changement[] = [];

  getEffectiveValue(fichereparation: any) {
    let result: any = {};
    for (let key of Object.keys(this.fichereparationForm.controls)) {
      if (key in fichereparation) result[key] = fichereparation[key];
      else result[key] = null;
    }
    return result;
  }

  load() {
    this._fichereparationService.getById(this.id).subscribe((data) => {
      this.fichereparation = data;
      this.fichereparationForm.setValue(
        this.getEffectiveValue(this.fichereparation)
      );
    });

    this._interventionService.get().subscribe((data: any[]) => {
      this.interventions = data;
    });

    this._changementService.getChangement().subscribe((data: any[]) => {
      this.changements = data;
    });

    this._anomalieService.get().subscribe((data: any[]) => {
      this.anomalies = data;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  posting = false;
  async updateFicheReparation() {
    if (this.posting) return false;
    this.posting = true;

    const ficheReparation: demandeReparations = this.fichereparationForm.value;
    try{
      await this._fichereparationService
      .updateFicheReparation(this.id, ficheReparation)
      .toPromise()

      this.router.navigate(['/fichereparation']);
    } catch {
      this.posting = false;
    }
    return
  }
}
