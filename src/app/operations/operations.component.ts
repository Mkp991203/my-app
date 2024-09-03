import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {

  @Input() public cal1:number=0;
  @Input() public cal2:number=0;
  @Input() public resultc:number=0;

@Output() public cEvent:EventEmitter<any>= new EventEmitter();

  sum(){
    this.resultc= this.cal1 + this.cal2,
    this.cEvent.emit(this.resultc);
  }
  
  mul(){
    this.resultc= this.cal1 * this.cal2,
    this.cEvent.emit(this.resultc);
  }
}
