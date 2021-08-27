import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User , UserRole} from 'src/app/entities/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm = new FormGroup({
    nom: new FormControl(null, Validators.required),
    prenom: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    role: new FormControl(null, Validators.required)
  });

  clearInput() {
    this.userForm.reset();
    for (let control in this.userForm.controls) {
      this.userForm.controls[control].setErrors(null);
    }
  }

  public checkerror = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  };

  rolesKeys:any = Object.keys(UserRole);
  roles:any = UserRole;

  constructor(private _userSerivce: UserService,
    private router: Router,
    private authService : AuthService) { }

  ngOnInit(): void {

  }


  posting = false;
  async addUser() {
    if (this.posting) return false;
    this.posting = true;

    const user: User = this.userForm.value;
      try {
        await this._userSerivce.add(user)
        .toPromise()

        this.router.navigate(['/user'])
      } catch {
        this.posting = false;
      }
      return
  }


  // async addUserPro() {
  //   if (this.posting) return false;
  //   this.posting = true;

  //   const user: User = this.userForm.value;
  //     try {
  //       await this._userSerivce.add(user)
  //       .toPromise()

  //       this.router.navigate(['/user'])
  //     } catch {
  //       this.posting = false;
  //     }
  //     return
  // }

}
