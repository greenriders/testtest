import { ApplicationHttpClient } from './http-app-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../entities/client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private api: string = `${environment.baseUrl}/client`;

  constructor(private HttpClient: ApplicationHttpClient) { }

  public getClient(): Observable<any> {
    return this.HttpClient.get(this.api)
  }

  public getById(id: string): Observable<any> {
    return this.HttpClient.get(this.api + '/' + id)
  }

  // public getClientParams(): Observable<any> {
  //   let param1 = new HttpParams().set('id', '6');
  //   return this.HttpClient.get(this._Url, { params: param1 })
  // }

  public addClient(
    client: Client
  ): Observable<any> {
    return this.HttpClient.post(this.api, client)
  }

  public update(
    id: string,
    client : Partial<Client>
  ): Observable<any> {
    return this.HttpClient.put(this.api + '/' + id, client);
  }

  public deleteClient(id: number): Observable<any> {
    return this.HttpClient.delete(this.api + '/' + id)
  }
}
