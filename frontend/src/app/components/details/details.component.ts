
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { demandeReparations } from 'src/app/entities/demands';
import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { AnomalieService } from 'src/app/services/anomalie.service';
import { Anomalie } from 'src/app/entities/anomalie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: string = '';
  anomalie: Anomalie[] = [];
  demandeReparation?: any = undefined;
  constructor(private _demandereparationService: DemandereparationService,
    private router: ActivatedRoute,
    private anomalieService: AnomalieService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params.id;
    });
    this.anomalieService.get().subscribe(data => this.anomalie = data);
    this.getDemande(this.id);
  }

  getDemande(id: string): void {
    this._demandereparationService.getById(id).subscribe((data: demandeReparations) => {
      this.demandeReparation = data;
    });
  }

  getAnomalies(data: any[]) {
    let anomalie = '';
    data.forEach(e => anomalie += this.getAnomalieName(e.anomalieId)+'\t')
    return anomalie;
  }

  getAnomalieName(id: number) {
    const anomalie = this.anomalie.find(e => e.id === id);
    return anomalie?.nom;
  }
}
