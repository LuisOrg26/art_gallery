import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private arturl = 'http://localhost:3000/api/en/api/2/PaintingSearch?term=';
  private sessionurl ='https://www.wikiart.org/es/Api/2/login?accessCode=bd31b0255f72424c&secretCode=9bee2f088562cfa3'
  public sessionkey:any;
  private headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Access-Control-Allow-Origin': 'localhost:4200'
  };
  
  constructor(private http: HttpClient) {
  }

  getArt(search: any) {
    const head = this.headers
    return this.http.get(this.arturl +search);
  }
  getSession(){
    return this.sessionkey = this.http.get(this.sessionurl);
  }
}
