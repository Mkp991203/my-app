import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  public len:number = 0;
  public brd:number = 0;
  public result:number = 0;

  area(){
    this.result= this.len*this.brd;
  }
  perameter(){
    this.result= 2*(this.len+this.brd);
  }

}
