import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { 
    this.gimmeJokes();
  }

  gimmeJokes() {
      return this.http.get('https://api.chucknorris.io/jokes/random');
  }
}
