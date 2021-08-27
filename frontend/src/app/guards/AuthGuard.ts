import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { UserRole } from '../entities/user';
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {


    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let url: string = state.url;
        return this.checkUserLogin(next, url);
    }


    async checkUserLogin(route: ActivatedRouteSnapshot, url: any): Promise<boolean> {

        if (this.authService.isLoggedIn()) {
            const user = await this.authService.getUser();
            if (route.data.roles && (user.role != UserRole.Admin && (route.data.roles.indexOf(user.role) === -1))) {
                return false;
            }

            return true;
        }

        return false;
    }
}
