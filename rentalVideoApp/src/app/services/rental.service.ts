import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Rentals } from '../models/rentals';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  // tslint:disable-next-line:variable-name
  base_path = 'http://localhost:8081/rental/api/rentals/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  // Get rentals data
  getRentals(): Observable<Rentals> {
    return this.http
      .get<Rentals>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

      // Create a new rental
      createItem(item): Observable<Rentals> {
        return this.http
          .post<Rentals>(this.base_path, JSON.stringify(item), this.httpOptions)
          .pipe(
            retry(2),
            catchError(this.handleError)
          );
      }


      getItem(id): Observable<Rentals> {
        return this.http
          .get<Rentals>(this.base_path + id)
          .pipe(
            retry(2),
            catchError(this.handleError)
          );
      }
}
