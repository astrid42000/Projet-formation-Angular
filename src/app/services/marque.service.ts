import { Injectable } from '@angular/core';
import {Marque} from '../models/marque';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Voiture} from '../models/voiture';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  apiUrl = 'http://localhost:3000/marque';
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};

  constructor(private http: HttpClient) { }

  getAll(): Observable<Marque[]>{
    return this.http.get<Marque[]>(this.apiUrl).pipe(retry(1), catchError(this.erreur));
  }



  erreur(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
