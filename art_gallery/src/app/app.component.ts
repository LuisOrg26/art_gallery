import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Art Gallery';
  query: string = '';
  content: any;
  paint: string = '';

  constructor(private service: ApiService) {}

  searchApi() {
    this.service.getArt(this.query).subscribe(
      (data) => {
        this.content = data;
        this.paint = this.content.data[0].title;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}

