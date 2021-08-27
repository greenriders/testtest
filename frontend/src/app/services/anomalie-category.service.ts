import { ApplicationHttpClient } from './http-app-client';
import { AnomalieCategory } from './../entities/anomalie-category';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AnomalieCategoryService {
  private api: string = `${environment.baseUrl}/anomalie-category`;
  constructor(private httpClient: ApplicationHttpClient) { }

  public get(): Observable<any> {
    return this.httpClient.get(this.api)
  }

  public getById(id: string): Observable<any> {
    return this.httpClient.get(this.api + '/' + id)
  }

  // public getParams():Observable<any> {
  //   let param1 = new HttpParams().set('id', '6');
  //   return this.httpClient.get(this._Url, {params:param1}).pipe(
  //     retry(3),
  //     catchError(this.handleError)
  //   );
  // }

  public add(
    anomalieCategory: AnomalieCategory
  ): Observable<any> {
    return this.httpClient.post(this.api, anomalieCategory)
  }

  public update(
    id: string,
    anomalieCategory: Partial<AnomalieCategory>
  ): Observable<any> {
    return this.httpClient.put(this.api + '/' + id, anomalieCategory);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.api + '/' + id)
  }
}
