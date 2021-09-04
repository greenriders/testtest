import { Component, OnInit } from '@angular/core';
import { User, UserRole } from '../entities/user';
import { AuthService } from '../services/auth.service';
import { ClientStyle, LayoutService } from '../services/layout.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
  username?: string;
  background: string = "red";
  isClient = true;
  style: ClientStyle;
  user?: User;
  // showAdminBoard = false;
  // showModeratorBoard = false;


  constructor(private authService: AuthService, private layoutService: LayoutService) {
    this.style = layoutService.getStyle();
  }

  async ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.style = await this.layoutService.getUserStyle();

    if (this.isLoggedIn) {
      const user = await this.authService.getUser();
      this.user = user;

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.nom + " " + user.prenom;
    }
  }

  logout(): void {
    this.authService.signOut();
    window.location.href = "/login";
  }

  isClientUser() {
    return this.user?.role === UserRole.Professionnel;
  }
}
