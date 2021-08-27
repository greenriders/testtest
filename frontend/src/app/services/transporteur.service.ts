import { Transporteur } from './../entities/transporteur';
import { ApplicationHttpClient } from './http-app-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransporteurService {
  private api: string = `${environment.baseUrl}/transporteur`;
  constructor( private httpClient: ApplicationHttpClient) { }

  public get():Observable<any> {
    return this.httpClient.get(this.api)
  }

  public getById(id: string): Observable<any> {
    return this.httpClient.get(this.api + '/' + id)
  }
  public add(
    transporteur: Transporteur
  ): Observable<any> {
       return this.httpClient.post(this.api , transporteur)
  }
  public update(
    id: string,
    transporteur: Partial<Transporteur>
  ): Observable<any> {
    return this.httpClient.put(this.api + '/' + id, transporteur);
  }
  public delete(id:number):Observable<any> {
    return this.httpClient.delete(this.api + '/' + id)
  }
}
