import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Credits } from '../models/credits';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  
  basePathCr = 'http://localhost:8081/rental/api/credits/';
  basePathRo = 'http://localhost:8081/rental/api/rols/';

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

  // Get credits data
  getCredits(): Observable<Credits> {
    return this.http
    .get<Credits>(this.basePathCr)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }


  // Get roles data
  getRoles(): Observable<Credits> {
    return this.http
    .get<Credits>(this.basePathRo)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

}
