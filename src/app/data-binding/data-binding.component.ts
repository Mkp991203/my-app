import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public age:number = 25;
  public name:string = "Pardhu";
  public isIndian:boolean = true;


  public isValid:boolean = false;
  public url:string = "/assets/404.png";

  public phone:string = "+91 ";


  submit(){
    alert("submitted!!!!!!!");
  }
  typing(){
    alert("typing....");
  }
}
