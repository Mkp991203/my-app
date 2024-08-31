import { Component } from '@angular/core';
import { FlipkartpgsvcService } from '../flipkartpgsvc.service';

@Component({
  selector: 'app-flipkartpage',
  templateUrl: './flipkartpage.component.html',
  styleUrls: ['./flipkartpage.component.css']
})
export class FlipkartpageComponent {

  public flipkartpages:any =[];

  constructor(private _flipkartpgsvcService:FlipkartpgsvcService) {
    _flipkartpgsvcService.getflipkartpage().subscribe(
      (data:any)=>{
        this.flipkartpages = data; 
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
}
