import { ApplicationHttpClient } from './http-app-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api: string = `${environment.baseUrl}/user`;
  constructor(private httpClient: ApplicationHttpClient) {}

  public get(): Observable<any> {
    return this.httpClient.get(this.api)
  }

  getAllTechnicien(): Observable<User[]> {
    return this.httpClient.get( this.api + '/technicien');
  }

  getAvailableProfessionnel(): Observable<User[]> {
    return this.httpClient.get( this.api + '/professionnel');
  }

  public getById(id: string): Observable<any> {
    return this.httpClient.get(this.api + '/' + id)
  }

  public add(
    user: User
    ): Observable<any> {
    return this.httpClient.post(this.api, user);
  }

  public update(
    id: string,
    user: Partial<User>
  ): Observable<any> {
    return this.httpClient.put(this.api + '/' + id, user);
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete(this.api + '/' + id )
  }

  register(user: User): Observable<any> {
    return this.httpClient.post(
      this.api, user + 'signup',

    );
  }
}
