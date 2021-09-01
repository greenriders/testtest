import { ApplicationHttpClient } from './http-app-client';
import { SousMarque } from 'src/app/entities/sous-marque';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SousMarqueService {
  private api: string = `${environment.baseUrl}/sousMarque`;

  constructor(private httpClient: ApplicationHttpClient) { }

  public getModele():Observable<SousMarque[]> {
    return this.httpClient.get(this.api)
  }


  public getById(marqueId: string): Observable<SousMarque[]> {
    return this.httpClient.get(this.api + '/' + marqueId)
  }
}
