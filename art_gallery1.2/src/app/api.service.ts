import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private arturl = 'https://api.artic.edu/api/v1/artworks/';

  constructor(private http: HttpClient) {}

  getArt(search: any) {
    return this.http.get(this.arturl +'search?q='+search);
  }
  getPaint(id:any){
    return this.http.get(this.arturl + id);
  }
  
}
