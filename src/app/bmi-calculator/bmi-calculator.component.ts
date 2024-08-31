import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent {

  public hgt:number = 0;
  public wgt:number = 0;
  public result:number = 0;

  calculate(){
    this.result = this.wgt / ((this.hgt/100)*(this.hgt/100));
  }
}
