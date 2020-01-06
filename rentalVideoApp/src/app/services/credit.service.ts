import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(
    private http: HttpClient
  ) { }

  getCredits() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }
}
