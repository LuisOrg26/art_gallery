import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private arturl = 'https://www.wikiart.org/en/api/2/PaintingSearch?term=';
  private sessionurl ='https://www.wikiart.org/es/Api/2/login?accessCode=bd31b0255f72424c&secretCode=9bee2f088562cfa3'
  private session:any;
  private body = {
    'accessCode': 'bd31b0255f72424c',
    'secretCode': '9bee2f088562cfa3'
  }
  private headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Access-Control-Allow-Origin': 'localhost:4200'
  };
  
  constructor(private http: HttpClient) {
    this.session = this.http.post(this.sessionurl,this.body);
  }

  getArt(search: any,imageFormat='Large') {
    const head = this.headers
    return this.http.get(this.arturl +search+'&imageFormat='+imageFormat,{headers:head});
  }
}
