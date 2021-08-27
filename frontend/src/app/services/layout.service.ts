import { Injectable } from '@angular/core';
import { UserRole } from '../entities/user';
import { AuthService } from './auth.service';
export interface ClientStyle {
  background: string,
  logo: string,
  logoClient: string,
  aNavColor: string,
  bodyClass: string

}
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  styles: { [index: string]: ClientStyle } = {
    "renault": {
      bodyClass: "renault-body",
      aNavColor: "#000",
      background: "#fff",
      logo: "../../assets/images/02_KIT IDENTITE_LOGO_04_logo-sans-baseline-bleu.png",
      logoClient: "/assets/images/renault-client.png",
    },
    "default": {
      bodyClass: "default-body",
      background: "linear-gradient(180deg, #01778f 42.64%, rgba(1, 119, 143, 0.848958) 61.59%, rgba(1, 119, 143, 0.695162) 72.01%, rgba(1, 119, 143, 0.49308) 81.8%, rgba(1, 119, 143, 0) 100%)",
      logo: "/assets/images/green-riders_white.png",
      logoClient: "",
      aNavColor: "#fff"
    }
  }

  currentStyle: ClientStyle;

  constructor(private authSerivce: AuthService) {
    this.currentStyle = this.styles["default"];
  }


  getStyle() {
    return this.currentStyle;
  }

  async getUserStyle(): Promise<ClientStyle> {
    if (!this.authSerivce.isLoggedIn())
      return this.styles["default"]; // change to renault to test
    let user = await this.authSerivce.getUser();

    if (user && user.role == UserRole.Professionnel && user.code in this.styles)
      return this.styles[user.code];

    return this.styles["default"];

  }

}
