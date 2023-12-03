import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-art-card',
  template: `
    <div class="box">
      <mat-card class="content">
        <img src="{{image}}" alt="{{title}}" class="img">
        @if (description){
          <div class="des">
          <p class="title">{{title}}</p>
          <p class="artist">{{artistName}}</p>
          @for(style of styles; track style){
            <p class="styles">{{style}}</p>
          }
          <p class="description">{{description}}</p>
          </div>
      }@else {
        <div class="ndes">
          <p class="title">{{title}}</p>
          <p class="artist">{{artistName}}</p>
          @for(style of styles; track style){
            <p class="styles">{{style}}</p>
          }
        </div>
      }
      </mat-card>  
      </div>
  `,
  styleUrl: 'art-card.component.css'
})
export class ArtCardComponent implements OnInit {
  id:any;
  styles:any;
  description:any;
  title:any;
  artistName:any;
  content:any;
  image: any;
  constructor(private route: ActivatedRoute, private service: ApiService){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('query')
    this.service.getInfo(this.id).subscribe(
      (data)=>{
        this.content = data;
        this.styles = this.content.styles;
        this.title = this.content.title;
        this.description = this.content.description;
        this.artistName = this.content.artistName;
        this.image  =this.content.image;


      }
    )
  }


}
