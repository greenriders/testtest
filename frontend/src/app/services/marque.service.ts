import { ApplicationHttpClient } from './http-app-client';
import { Marque } from 'src/app/entities/marque';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  private api: string = `${environment.baseUrl}/marque`;
  constructor(private httpClient: ApplicationHttpClient) { }

  public getMarque():Observable<any> {
    return this.httpClient.get(this.api)
  }

  public getById(id: string): Observable<any> {
    return this.httpClient.get(this.api + '/' + id)
  }

  // public getMarqueParams():Observable<any> {
  //   let param1 = new HttpParams().set('id', '6');
  //   return this.httpClient.get(this.api)
  // }

  public addMarque(
    marque : Marque
  ): Observable<any> {
      return this.httpClient.post(this.api , marque)
  }

  public update(
    id: string,
    marque: Partial<Marque>
  ): Observable<any> {
    return this.httpClient.put(this.api + '/' + id, marque);
  }

  public deleteMarque(id:number):Observable<any> {
    return this.httpClient.delete(this.api + '/' + id)
  }
}
