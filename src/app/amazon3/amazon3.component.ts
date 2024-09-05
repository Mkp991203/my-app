import { Component } from '@angular/core';
import { AmazonserviceService } from '../amazonservice.service';

@Component({
  selector: 'app-amazon3',
  templateUrl: './amazon3.component.html',
  styleUrls: ['./amazon3.component.css']
})
export class Amazon3Component {

  public cartcount:number=0;

  constructor(private _amazonService:AmazonserviceService){

    _amazonService.getcartcount().subscribe(
      (data:any)=>{
        this.cartcount=data;
      }
    )
  }
}
