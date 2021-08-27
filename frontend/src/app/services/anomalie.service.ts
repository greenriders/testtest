import { Anomalie } from 'src/app/entities/anomalie';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationHttpClient } from './http-app-client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnomalieService {
  private api: string = `${environment.baseUrl}/anomalie`;
  constructor(private httpClient: ApplicationHttpClient) { }

  public get(): Observable<any> {
    return this.httpClient.get(this.api);
  }

  public getById(id: string): Observable<any> {
    return this.httpClient.get(this.api + '/' + id);
  }

  public addAnomalie(
    anomalie: Anomalie
  ): Observable<any> {
    return this.httpClient.post(this.api, anomalie);
  }

  public updateAnomalie(
    id: string,
    anomalie: Partial<Anomalie>
  ): Observable<any> {
    return this.httpClient.put(this.api + '/' + id, anomalie);
  }

  public deleteAnomalie(id: number): Observable<any> {
    return this.httpClient.delete(this.api + '/' + id);
  }

}

