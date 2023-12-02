import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  hidden: boolean = true;
  constructor(private router: Router){}
  searchApi(query: string): void {
    /*this.service.getArt(query).subscribe(
      (data) => {
        this.content = data;
        if (this.content.data) {
          this.paint = this.content.data[0].title;
          this.id = this.content.data[0].id;
          this.artist = this.content.data[0].artistName;
          this.image = this.content.data[0].image;
          this.content = null;
        } else {
          this.paint = "No artwork found";
          this.artist = "Choose other words";
          this.image = "";
        }
      }
    );*/
      this.router.navigate(['/search'],{queryParams: {query: encodeURI(query)}});
    // Check if childComponent is defined before updating its data
  }


}


