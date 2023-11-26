import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from './api.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

