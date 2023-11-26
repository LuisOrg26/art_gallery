import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  title = 'Art Gallery';
  content: any;
  paint: string = '';
  id: number =0;
  artist: string =''
  image: string=''
  content_second:any;
  imageFormat:string ='Large';
  session_id:string=""
  constructor(private service: ApiService) {}

  searchApi(query: string) {
    this.service.getArt(query).subscribe(
      (data) => {
        this.content = data;
        if (this.content.data){
          this.paint = this.content.data[0].title;
          this.id = this.content.data[0].id;
          this.artist = this.content.data[0].artistName;
          this.image = this.content.data[0].image;
          this.content = null;
        }else{
          this.paint = "No artwork found";
          this.artist = "Choose other words";
          this.image = "";
        }
      }   
    );
  }
}

