import { ApplicationHttpClient } from './http-app-client';
import { Distributeur } from './../entities/distributeur';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DistributeurService {
  private api: string = `${environment.baseUrl}/distributeur`;

  constructor(private HttpClient: ApplicationHttpClient) {}

  public getDistributeur(): Observable<any> {
    return this.HttpClient.get(this.api)
  }

  public getById(id: string): Observable<any> {
    return this.HttpClient.get(this.api + '/' + id)
  }

  public addDistributeur(distributeur: Distributeur): Observable<any> {
    return this.HttpClient.post(this.api, distributeur);
  }

  public update(
    id: string,
    distributeur: Partial<Distributeur>
  ): Observable<any> {
    return this.HttpClient.put(this.api + '/' + id, distributeur);
  }

  public deleteDistributeur(id: number): Observable<any> {
    return this.HttpClient.delete(this.api + '/' + id)
  }
}
