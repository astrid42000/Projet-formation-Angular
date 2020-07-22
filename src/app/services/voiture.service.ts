import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Voiture} from '../models/voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  apiUrl = "http://localhost:3000/voiture";
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};

  constructor(private http: HttpClient) { }

  allVoitures(): Observable<Voiture[]>{
    return this.http.get<Voiture[]>(this.apiUrl).pipe(retry(1), catchError(this.erreur));}

  getVoitureByMarque(nom:string): Observable <Voiture[]>{
    return this.http.get<Voiture[]>(this.apiUrl + '?marque=' + nom).pipe(retry(1), catchError(this.erreur));}

  voitureById(id: number): Observable<Voiture>{
    return this.http.get<Voiture>(this.apiUrl + '/' + id).pipe(retry(1),catchError(this.erreur));}

updateVoiture(voiture: Voiture){
    return this.http.put<Voiture>(this.apiUrl + '/' + voiture.id, voiture,this.httpOption).pipe(catchError(this.erreur));
}

deleteVoiture(id:number): Observable<Voiture>{
    return this.http.delete<Voiture>(this.apiUrl + '/' + id, this.httpOption).pipe(catchError(this.erreur));
}

AjoutVoiture(newVoiture: Voiture): Observable<Voiture>{
    return this.http.post<Voiture>(this.apiUrl, newVoiture, this.httpOption).pipe(catchError(this.erreur));
}

  getVoitureByGarage(id:number): Observable <Voiture[]>{
    return this.http.get<Voiture[]>(this.apiUrl + '?garage=' + id).pipe(retry(1), catchError(this.erreur));}



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

