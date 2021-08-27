import { User, UserRole } from './../../../entities/user';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

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

 

  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  posting = false;
  async addUser() {
    if (this.posting) return false;
    this.posting = true;

    const user: User = this.userForm.value;
      try {
        await this.userService.add(user)
        .toPromise()

        this.router.navigate(['/login'])
      } catch {
        this.posting = false;
      }
      return
  }

  // onSubmit(): void {
  //   const user: User = this.form;

  //   this.userService.register(user).subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //     },
  //     (err) => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   );
  // }

}
