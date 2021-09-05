import { ApplicationHttpClient } from './http-app-client';
import { Produit } from './../entities/produit';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private api: string = `${environment.baseUrl}/produit`;

  constructor(private HttpClient: ApplicationHttpClient) { }

  public getProduit():Observable<any> {
    return this.HttpClient.get(this.api);
  }

  public getById(id: string): Observable<any> {
    return this.HttpClient.get(this.api + '/' + id);
  }

  public getBySousMarqueId(produitId: string): Observable<Produit[]> {
    return this.HttpClient.get(this.api + '/modele/' + produitId)
  }

  // public getProduitParams():Observable<any> {
  //   let param1 = new HttpParams().set('id', '6');
  //   return this.HttpClient.get(this._Url, {params:param1}).pipe(
  //     retry(3),
  //     catchError(this.handleError)
  //   );
  // }

  public addProduit(
    produit: Produit
  ): Observable<any> {
      return this.HttpClient.post(this.api , produit);
  }

  // public updateProduit(
  //   produit : Produit
  // ): Observable<any> {
  //     return this.HttpClient.put(this.api , produit)
  // }

  public update(
    id: string,
    produit: Partial<Produit>
  ): Observable<any> {
    return this.HttpClient.put(this.api + '/' + id, produit);
  }

  public deleteProduit(id:number):Observable<any> {
    return this.HttpClient.delete(this.api + '/' + id)
  }

}
