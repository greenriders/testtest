import { ApplicationHttpClient } from './http-app-client';
import { Modele } from 'src/app/entities/modele';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {
  private api: string = `${environment.baseUrl}/modele`;

  constructor(private httpClient: ApplicationHttpClient) { }

  public getModele():Observable<any> {
    return this.httpClient.get(this.api)
  }

  // public getModeleParams():Observable<any> {
  //   let param1 = new HttpParams().set('id', '6');
  //   return this.httpClient.get(this.api)
  // }

  public getById(id: string): Observable<Modele> {
    return this.httpClient.get(this.api + '/' + id)
  }

  public getBySousMarqueId(sousMarqueId: string): Observable<Modele[]> {
    return this.httpClient.get(this.api + '/sousMarque/' + sousMarqueId)
  }

  public addModele(
    modele: Modele
  ): Observable<any> {
       return this.httpClient.post(this.api , modele)
  }

  public update(
    id: string,
    modele: Partial<Modele>
  ): Observable<any> {
    return this.httpClient.put(this.api + '/' + id, modele);
  }

  public deleteModele(id:number):Observable<any> {
    return this.httpClient.delete(this.api + '/' + id)
  }
}
