import { Injectable } from '@angular/core';
import {  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user';
import { ApplicationHttpClient } from './http-app-client';
import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: ApplicationHttpClient, private router: Router) {}
  api = `${environment.baseUrl}/auth/`
  signOut(): void {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public async requestUser(): Promise<User | null> {
    try {
      return await this.http
        .get(this.api + 'profile', httpOptions)
        .pipe(map((response) => response as User))
        .toPromise();
    } catch (ex) {
      return Promise.resolve(null);
    }
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }

  public async getUser(): Promise<User> {
    let userStorage = window.sessionStorage.getItem(USER_KEY);

    if (userStorage) {
      return JSON.parse(userStorage);
    }
    let user = await this.requestUser();

    if (user == null) {
      this.signOut();
      this.redirectLogin();
      return Promise.resolve({} as User);
    }

    this.saveUser(user);

    return user;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.api + 'login',
      {
        username,
        password,
      }
    );
  }

  // register(nom: string, prenom:string, email: string, password: string, code: string): Observable<any> {
  //   return this.http.post(
  //     this.api + 'signup',
  //     {
  //       nom,
  //       prenom,
  //       email,
  //       password,
  //       code,
  //     },
  //     httpOptions
  //   );
  // }
}
