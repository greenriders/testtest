import { User } from 'src/app/entities/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  dialogRef!: MatDialogRef<DialogComponent>;

  user: User[] = [];
  columnNames: string[] = ['id','nom', 'prenom', 'email', 'password', 'role', 'modifier', 'effacer'];

  constructor(private _userService: UserService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this._userService.get().subscribe((data: any[]) => {
      console.log(data);
      return (this.user = data);
    });
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
  delete(id: number): void {
    this._userService.delete(id).subscribe((data: any) => {
      this.user = this.user.filter((e) => e.id != id);
    });
  }
}
