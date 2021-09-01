import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/entities/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.redirect();
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      (data) => {
        this.authService.saveToken(data.access_token);
        console.log(data);
        this.isLoginFailed = false;
        this.redirect();
      },
      (err) => {
        console.log(err);
        this.errorMessage = err.message;
        this.isLoginFailed = true;
      }
    );
  }

  async redirect() {
    if (this.authService.isLoggedIn()) {
      let user = await this.authService.getUser();

      if (user.role == UserRole.Professionnel||user.role == UserRole.Client) {
        this.router.navigate(['/homepro']);
        return;
      }
    }
    this.router.navigate(['/']);
  }

}
