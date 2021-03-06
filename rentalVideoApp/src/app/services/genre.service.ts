import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Genres } from '../models/genres';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  base_path= 'http://localhost:8081/rental/api/genres/';

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

  // Get genres data
  getGenres(): Observable<Genres> {
    return this.http
      .get<Genres>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


    // Create a new genre
    createItem(item): Observable<Genres> {
      return this.http
        .post<Genres>(this.base_path, JSON.stringify(item), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
    }


    // Create a new genre
    deleteItem(item): Observable<Genres> {
      return this.http
        .post<Genres>(this.base_path, JSON.stringify(item), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
    }
}
