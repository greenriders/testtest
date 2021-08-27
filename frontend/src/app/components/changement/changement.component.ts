import { ChangementService } from './../../services/changement.service';
import { Changement } from './../../entities/changement';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-changement',
  templateUrl: './changement.component.html',
  styleUrls: ['./changement.component.scss'],
})
export class ChangementComponent implements OnInit {

  dialogRef!: MatDialogRef<DialogComponent>;

  changement: Changement[] = [];

  columnNames: string[] = ['id','nom', 'modifier', 'effacer'];

  constructor(private _changementService: ChangementService,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getChangement();
  }

  getChangement(): void {
    this._changementService.getChangement().subscribe((data: any[]) => {
      console.log(data);
      return (this.changement = data);
    });
  }

  onDeleteRequest(id: number){
    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false
    })
    this.dialogRef.afterClosed().subscribe(actionIfConfirmed => {
      if(actionIfConfirmed){
        this.deleteChangement(id)
      }
    })
  }

  isDeleting = false;

  deleteChangement(id: number): void {
    this._changementService.deleteChangement(id).subscribe((data: any) => {
      this.changement = this.changement.filter((e) => e.id != id);
    });
  }
}
