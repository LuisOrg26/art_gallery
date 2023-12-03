import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html'
  ,
  styleUrl:'./art.component.css' 
})
export class ArtComponent implements OnInit {
  query: any;
  content: any;
  paint: any;
  id: any;
  artist: any;
  image: any;
  show: any;
  format:string='Portrait'
  constructor(private service: ApiService, private route: ActivatedRoute, private router: Router) {}
  Search(text: string){
    this.router.navigate(['/search'],{queryParams: {query: encodeURI(text)}});
    this.query = text
    this.service.getArt(text,this.format).subscribe(
      (data) => {
        this.content = data;
        if (this.content.data[0]) {
          this.show = true
        } else {
          this.show = false
        }
      }
    );
  }
  searchPaint(id:string){
    this.router.navigate(['/paint'],{queryParams: {query: encodeURI(id)}});
  }
  ngOnInit(): void {
    this.query = this.route.snapshot.queryParamMap.get('query')
    this.query = decodeURI(this.query)
    this.service.getArt(this.query, this.format).subscribe(
    (data) => {
      this.content = data;
      if (this.content.data[0]) {
        this.show = true
      } else {
        this.show = false
      }
    }
  );
  }

}

