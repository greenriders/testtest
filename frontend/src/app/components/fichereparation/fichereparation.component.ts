import { DemandereparationService } from './../../services/demandereparation.service';
import { ChangementService } from './../../services/changement.service';
import { InterventionService } from './../../services/intervention.service';
import { Component, OnInit } from '@angular/core';
import { Changement } from 'src/app/entities/changement';
import { demandeReparations } from 'src/app/entities/demands';
import { Intervention } from 'src/app/entities/intervention';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Anomalie } from 'src/app/entities/anomalie';
import { AnomalieCategoryService } from 'src/app/services/anomalie-category.service';

@Component({
  selector: 'app-fichereparation',
  templateUrl: './fichereparation.component.html',
  styleUrls: ['./fichereparation.component.scss']
})

export class FichereparationComponent implements OnInit {

  dialogRef!: MatDialogRef<DialogComponent>;

  fichereparations: demandeReparations[] = [];
  anomalies: Anomalie[] = [];
  interventions: Intervention[] = [];
  changements: Changement[] = [];

  columnNames: string[] = ["numRMA", "anomalieCategoryId", "interventionId", "changementId", "note", "dateSortie", "facture", "modifier"]


  constructor(private _fichereparationService: DemandereparationService,
    private _anomalieService: AnomalieCategoryService,
    private _interventionService: InterventionService,
    private _changementService: ChangementService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();

    this._interventionService.get().subscribe((data: any[]) => {
      this.interventions = data
    });

    this._changementService.getChangement().subscribe((data: any[]) => {
      this.changements = data
    })

    this._anomalieService.get().subscribe((data: any[]) => {
      this.anomalies = data
    });
  }

  get(): void {
    this._fichereparationService.getDemandereparation().subscribe((data: any[]) => {
      console.log(data)
      return this.fichereparations = data;
    });
  }

  getAnomlieNoms(demande: demandeReparations) {
    return demande.demandeToAnomalie.map(e => e.anomalie.nom).join(" , ")
  }


}
