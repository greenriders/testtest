import { InterventionService } from './../../services/intervention.service';
import { Intervention } from './../../entities/intervention';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss']
})
export class InterventionComponent implements OnInit {


  dialogRef!: MatDialogRef<DialogComponent>;

  intervention: Intervention[] = []

  columnNames: string[] = [ 'id','type', 'modifier', 'effacer'];

  constructor(private _interventionService: InterventionService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get():void {
    this._interventionService.get().subscribe((data: any[]) => {
      console.log(data)
      return this.intervention = data
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
    this._interventionService.delete(id).subscribe((data: any) => {
      this.intervention = this.intervention.filter(e => e.id != id);
    });
  }

}


