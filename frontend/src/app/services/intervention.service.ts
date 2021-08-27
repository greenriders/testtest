import { ApplicationHttpClient } from './http-app-client';
import { Intervention } from './../entities/intervention';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {
  private api: string = `${environment.baseUrl}/intervention`;

  constructor(private httpClient: ApplicationHttpClient) { }

  public get():Observable<any> {
    return this.httpClient.get(this.api)
  }

  public getById(id: string): Observable<any> {
    return this.httpClient.get(this.api + '/' + id)
  }

  public add(
    intervention : Intervention
  ): Observable<any> {
    return this.httpClient.post(this.api, intervention)
  }

  public update(
    id: string,
    intervention: Partial<Intervention>
  ): Observable<any> {
    return this.httpClient.put(this.api + '/' + id, intervention);
  }

  public delete(id:number):Observable<any> {
    return this.httpClient.delete(this.api + '/' + id)
  }

}
