import { Component } from '@angular/core';
import { AmazonserviceService } from '../amazonservice.service';

@Component({
  selector: 'app-amazon4',
  templateUrl: './amazon4.component.html',
  styleUrls: ['./amazon4.component.css']
})
export class Amazon4Component {

  public cartcount:number=0;

constructor(private _amazonservice:AmazonserviceService){

  _amazonservice.getcartcount().subscribe(
    (data:any)=>{
      this.cartcount=data;
    }
  )
}
}
