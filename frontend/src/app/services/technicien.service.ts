// import {
//   HttpClient,
//   HttpErrorResponse,
//   HttpParams,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { throwError, Observable } from 'rxjs';
// import { retry, catchError } from 'rxjs/operators';
// import { Technicien } from '../entities/technicien';

// @Injectable({
//   providedIn: 'root',
// })
// export class TechnicienService {
//   private _Url: string = 'http://localhost:3000/user/technicien';
//   constructor(private HttpClient: HttpClient) { }

//   private handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred:', error.error.message);
//     } else {
//       console.error(
//         `Backend returned code ${error.status}, ` + `body was: ${error.error}`
//       );
//     }

//     return throwError('Something bad happened; please try again later.');
//   }

//   public getTechnicien(): Observable<any> {
//     return this.HttpClient.get(this._Url).pipe(
//       retry(3),
//       catchError(this.handleError)
//     );
//   }

//   public getTechnicienParams(): Observable<any> {
//     let param1 = new HttpParams().set('id', '6');
//     return this.HttpClient.get(this._Url, { params: param1 }).pipe(
//       retry(3),
//       catchError(this.handleError)
//     );
//   }

//   public addTechnicien(
//     technicien: Technicien
//   ): Observable<any> {
//     const headers = { 'content-type': 'application/json' };
//     return this.HttpClient.post(this._Url, technicien, { headers: headers });
//   }

//   public updateTechnicien(
//     technicien: Technicien
//   ): Observable<any> {
//     const headers = { 'content-type': 'application/json' };

//     return this.HttpClient.put(this._Url, technicien, { headers: headers });
//   }

//   public deleteTechnicien(): Observable<any> {
//     return this.HttpClient.delete(this._Url).pipe(
//       retry(3),
//       catchError(this.handleError)
//     );
//   }
// }
