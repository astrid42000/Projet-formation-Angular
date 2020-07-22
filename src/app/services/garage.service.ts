import { Injectable } from '@angular/core';
import {Garages} from '../models/garages';
import {Voiture} from '../models/voiture';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  apiUrl = 'http://localhost:3000/garages';
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
garages = [];
  constructor(private http: HttpClient) { }

  ajoutGarage(newGarage: Garages): Observable<Garages>{
return this.http.post<Garages>(this.apiUrl, newGarage, this.httpOption).pipe(catchError(this.erreur));
  }

  allGarages(){
    return this.http.get<Garages[]>(this.apiUrl).pipe(retry(1), catchError(this.erreur));}

    deleteGarage(id:number): Observable<Garages>{
    return this.http.delete<Garages>(this.apiUrl + '/' + id , this.httpOption).pipe(catchError(this.erreur));
    }

    updateGarage(garage: Garages){
    return this.http.put<Garages>(this.apiUrl + '/' + garage.id, garage, this.httpOption).pipe(catchError(this.erreur));
    }

    garageById(id: number): Observable<Garages>{
    return this.http.get<Garages>(this.apiUrl + '/' + id).pipe(retry(1),catchError(this.erreur));
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
