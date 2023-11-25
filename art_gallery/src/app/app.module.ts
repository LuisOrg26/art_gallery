import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
  ],
  imports: [
    /* add modules here so Angular knows to use them */
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: []
})
export class AppModule { }