import { ApplicationHttpClient } from './http-app-client';
import { Changement } from './../entities/changement';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChangementService {
  private api: string = `${environment.baseUrl}/changement`;
  constructor(private httpClient: ApplicationHttpClient) {}

  public getChangement(): Observable<any> {
    return this.httpClient.get(this.api);
  }

  public getById(id: string): Observable<any> {
    return this.httpClient.get(this.api + '/' + id);
  }

  // public getChangementParams():Observable<any> {
  //   let param1 = new HttpParams().set('id', '6');
  //   return this.httpClient.get(this._Url, {params:param1}).pipe(
  //     retry(3),
  //     catchError(this.handleError)
  //   );
  // }

  public addChangement(
    changement: Changement
    ): Observable<any> {
    return this.httpClient.post(this.api, changement);
  }

  public update(
    id: string,
     changement: Partial<Changement>
     ): Observable<any> {
    return this.httpClient.put(this.api + '/' + id, changement);
  }

  public deleteChangement(id: number): Observable<any> {
    return this.httpClient.delete(this.api + '/' + id);
  }
}
