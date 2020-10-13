import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromementService {

  constructor() { }

  server(){
    return "http://localhost:8081";
  }
}
