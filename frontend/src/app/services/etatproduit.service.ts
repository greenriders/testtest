import { ApplicationHttpClient } from './http-app-client';
import { Etatproduit } from './../entities/etatproduit';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtatproduitService {
  private api: string = `${environment.baseUrl}/etatproduit`;

  constructor(private httpClient: ApplicationHttpClient) { }

  public get(): Observable<any> {
    return this.httpClient.get(this.api)
  }

  public getById(id: string): Observable<any> {
    return this.httpClient.get(this.api + '/' + id)
  }

  public add(
    etatproduit: Etatproduit
  ): Observable<any> {
    return this.httpClient.post(this.api, etatproduit)
  }

  public update(
    id: string,
    etatprduit: Partial<Etatproduit>
  ): Observable<any> {
    return this.httpClient.put(this.api + '/' + id, etatprduit);
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete(this.api + '/' + id)
  }
}
