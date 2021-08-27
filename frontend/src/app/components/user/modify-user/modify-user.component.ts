import { UserService } from 'src/app/services/user.service';
import { User } from './../../../entities/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.scss']
})
export class ModifyUserComponent implements OnInit {
  id: string = '';
  user: User | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _userService: UserService,

  ) { }

  userForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });


  getEffectiveValue(user: any) {
    let result: any = {};
    for (let key of Object.keys(this.userForm.controls)) {
      if (key in user) result[key] = user[key];
      else result[key] = null;
    }
    return result;
  }

  load() {
    this._userService.getById(this.id).subscribe((data) => {
      this.user = data;
      this.userForm.setValue(this.getEffectiveValue(this.user))
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.load();
    });
  }

  // updateUser(): void {
  //   const user: User = this.userForm.value;
  //   this._userService
  //   .update(this.id, user)
  //   .subscribe((data: any[]) => {
  //     console.log(data);
  //   })
  // }

  posting = false;
  async updateUser() {
    if (this.posting) return false;
    this.posting = true;

    const user: User = this.userForm.value;
      try {
        await this._userService.update(this.id, user)
        .toPromise()

        this.router.navigate(['/user'])
      } catch {
        this.posting = false;
      }
      return
  }

}
