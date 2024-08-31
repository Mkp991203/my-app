import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  public rad:number=0;
  public result:number=0;

  area(){
    this.result = this.rad*this.rad;
  }
  perameter(){
    this.result =  2*Math.PI*this.rad;
  }
}
