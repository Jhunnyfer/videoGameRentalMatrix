import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Films } from '../models/films';
import { Credits } from '../models/credits';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

   // API path
   // tslint:disable-next-line:variable-name
   base_path = 'http://localhost:8081/rental/api/films/';

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

  // Get Films data
  getFilms(): Observable<Films> {
    return this.http
      .get<Films>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getCreditByFilm(): Observable<Credits> {
    return this.http.get<Credits>(this.base_path)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }


  // Create a new film
  createItem(item): Observable<Films> {
    return this.http
      .post<Films>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
