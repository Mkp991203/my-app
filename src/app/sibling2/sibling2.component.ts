import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {

  public count:number=0;
  public cartcount:number = 0;

  constructor(private _commonService:CommonService){

    _commonService.getcount().subscribe(
      (data:any)=>{
        this.count= data;
      }
    )

    _commonService.getcartcount().subscribe(
      (data:any)=>{
        this.cartcount = data;
      }
    )
  }

  
}
