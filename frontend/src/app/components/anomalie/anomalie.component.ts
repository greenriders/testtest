import { AnomalieCategoryService } from 'src/app/services/anomalie-category.service';
import { AnomalieService } from './../../services/anomalie.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Anomalie } from 'src/app/entities/anomalie';
import { AnomalieCategory } from 'src/app/entities/anomalie-category';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-anomalie',
  templateUrl: './anomalie.component.html',
  styleUrls: ['./anomalie.component.scss']
})
export class AnomalieComponent implements OnInit {

  dialogRef!: MatDialogRef<DialogComponent>;

  anomalie: Anomalie[] = []
  anomalieCategories: AnomalieCategory[] = []

  columnNames: string[] = ['id','nom', 'prix', 'anomalieCategoryId', 'modifier', 'effacer'];


  constructor(private _anomalieService: AnomalieService,
              private _anomalieCategoryService: AnomalieCategoryService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this._anomalieCategoryService.get().subscribe((data: any[])=> {
      this.anomalieCategories = data
    })
    this.getAnomalie();
  }

  getAnomalie():void {
    this._anomalieService.get().subscribe((data: any[]) => {
      console.log(data)
      return this.anomalie = data
    })
  }

  onDeleteRequest(id: number){
    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false
    })
    this.dialogRef.afterClosed().subscribe(actionIfConfirmed => {
      if(actionIfConfirmed){
        this.delete(id)
      }
    })
  }

  isDeleting = false;

  delete(id: number):void {
    this._anomalieService.deleteAnomalie(id).subscribe((data: any) => {
      this.anomalie = this.anomalie.filter(e => e.id != id);
    });
  }

}
