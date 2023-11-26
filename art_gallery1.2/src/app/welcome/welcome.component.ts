import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  title = 'Art Gallery';
  query: string = '';
  content: any;
  paint: string = '';

  constructor(private service: ApiService) {}

  searchApi() {
    this.service.getArt(this.query).subscribe(
      (data) => {
        this.content = data;
      }

    );
    this.paint = this.content.data[0].title;
  }

}