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
  image_id: string=''
  content_second:any;
  constructor(private service: ApiService) {}

  searchApi(query: string) {
    this.service.getArt(query).subscribe(
      (data) => {
        this.content = data;
        this.paint = this.content.data[0].title;
        this.id = this.content.data[0].id
        this.service.getPaint(this.id).subscribe(
          (info) => {
            this.content_second = info;
            this.artist = this.content_second.data.artist_display;
            this.image_id = this.content_second.data.image_id;
          },
        )
      },
    );
  }
}

