import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-buy',
  template: `
    <h1 class="title">Buy a Canvas</h1>
<mat-card>
    <h2>Choose a Size</h2>
<mat-form-field>
  <mat-label>Size</mat-label>
  <mat-select matNativeControl required [(value)]="size">
    <mat-option value="Small">Small</mat-option>
    <mat-option value="Medium">Medium</mat-option>
    <mat-option value="Large">Large</mat-option>
    <mat-option value="XLarge">XLarge</mat-option>
  </mat-select>
</mat-form-field>
    <h2> Choose a material </h2>
<mat-form-field>
  <mat-label>Material</mat-label>
  <mat-select matNativeControl required [(value)]="material">
    <mat-option value="Wood">Wood</mat-option>
    <mat-option value="Plastic">Plastic</mat-option>
    <mat-option value="Metal">Metal</mat-option>
    <mat-option value="Wool">Wool</mat-option>
  </mat-select>
</mat-form-field>
<button mat-raised-button class="search" (click)="buyCanva()">Buy</button>
<p class="value">{{value}}</p>

</mat-card>
  `,
  styles: `
    .title{
    font-family: Kaushan Script ;
    text-align: center;
    font-size: 5vw;
    }
    mat-card {
    margin: 50px 30px;
    padding: 100px;
    font-family: Roboto;
    font-size: 1.5vw;
    line-height: 1.5vw;
    border-radius: 20px;
    text-align: justify;
}
  .value{
    text-align:center;
    font-size: 25px;
    margin:20px;
    font-family: Roboto;
  }
  `
})
export class BuyComponent {
  material: any;
  size: any;
  material_v:number = 0;
  size_v:number = 0;
  value:any;
  buyCanva(){
    switch(this.material){
      case 'Wood':
        this.material_v = 30;
        break;
      case 'Plastic':
        this.material_v = 10;
        break;
      case 'Metal':
        this.material_v = 20;
        break;
      case 'Wool':
        this.material_v = 40;
        break;
      default:
        this.material_v = 0;
    }
    switch(this.size){
      case 'Small':
        this.size_v = 100;
        break;
      case 'Medium':
        this.size_v = 200;
        break;
      case 'Large':
        this.size_v = 300;
        break;
      case 'XLarge':
        this.size_v = 400;
        break;
      default:
        this.size_v = 0;
    }
    this.value = "The Canvas Will Cost: $" + (this.material_v*this.size_v) + 'dollars';
  }
}
