import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Games } from '../models/games';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  basePathCr = 'http://localhost:8081/rental/api/games/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getGames(): Observable<Games> {
    return this.http
      .get<Games>(this.basePathCr)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Create a new videogame
  createItem(item): Observable<Games> {
    return this.http
      .post<Games>(this.basePathCr, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getItem(id): Observable<Games> {
    return this.http
      .get<Games>(this.basePathCr + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

}
