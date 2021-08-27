import { ApplicationHttpClient } from './http-app-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  private api: string = `${environment.baseUrl}/demande`;

  constructor(private httpClient: ApplicationHttpClient) { }

  public get():Observable<any> {
    return this.httpClient.get(this.api)
  }

  public getById(id: string): Observable<any> {
    return this.httpClient.get(this.api + '/' + id)
  }
}
