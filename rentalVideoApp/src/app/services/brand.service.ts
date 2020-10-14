import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Brands } from '../models/brands';
import { EnviromementService } from '../services/enviromement.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  base_path = '/rental/api/brands/';

  constructor(
    private http: HttpClient,
    private env: EnviromementService
  ) { }

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
      console.log(error);
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  // Get brands data
  getBrands(): Observable<Brands> {
    return this.http
      .get<Brands>(this.env.server() + this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  // Create a new brand
  createItem(item): Observable<Brands> {
    return this.http
      .post<Brands>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


    // Create a new brand
    updateItem(item): Observable<Brands> {
      return this.http
        .post<Brands>(this.base_path, JSON.stringify(item), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
    }

  // Create a new brand
  deleteItem(id: number): Observable<{}> {
    const url = `${this.env.server() + this.base_path + "brand/" + id}`;
    console.log(url);
    return this.http
      .get(url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
