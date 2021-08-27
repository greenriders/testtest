import { AnomalieCategory } from '../../entities/anomalie-category';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnomalieCategoryService } from 'src/app/services/anomalie-category.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-anomalie-category',
  templateUrl: './anomalie-category.component.html',
  styleUrls: ['./anomalie-category.component.scss']
})
export class AnomalieCategoryComponent implements OnInit {


  dialogRef!: MatDialogRef<DialogComponent>;

  anomalieCategory : AnomalieCategory[] = [];

  columnNames: string[] = ['id','nom', 'modifier', 'effacer'];

  constructor(private _anomalieCategoryService: AnomalieCategoryService,
              public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.get();
  }

  get():void {
    this._anomalieCategoryService.get().subscribe((data: any[]) => {
      console.log(data)
      return this.anomalieCategory = data
    })
  }

  // add():void {
  //   const anomalieCategory : AnomalieCategory = this.anomalieCategoryForm.value;
  //   this._anomalieCategoryService.add(
  //     anomalieCategory
  //   ).subscribe((data: AnomalieCategory) => {
  //     console.log(data)
  //     this.anomalieCategory.push(data);
  //   })
  // }

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
    this._anomalieCategoryService.delete(id).subscribe((data: any) => {
       this.anomalieCategory = this.anomalieCategory.filter(e => e.id != id);
    });
  }

}
