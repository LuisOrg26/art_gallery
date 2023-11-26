import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule,MatCardModule,MatButtonModule,MatInputModule,MatFormFieldModule],
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

