import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private arturl = "https://api.artic.edu/api/v1/artworks/search?q=";

  constructor(private http: HttpClient) { }

  getArt(search: string = "") {
    return this.http.get(this.arturl + search);
  }
}

