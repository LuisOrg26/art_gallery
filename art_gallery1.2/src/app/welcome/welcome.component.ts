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

  constructor(private service: ApiService) {}

  searchApi(query: string) {
    this.service.getArt(query).subscribe(
      (data) => {
        this.content = data;
        this.paint = this.content.data[0].title;
        // You can do additional processing or UI updates here after the API call completes.
      },
      (error) => {
        console.error('Error fetching data:', error);
        // Handle errors if needed
      }
    );
  }
}

