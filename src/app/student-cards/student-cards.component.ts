import { Component } from '@angular/core';
import { StudentCardsService } from '../student-cards.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-student-cards',
  templateUrl: './student-cards.component.html',
  styleUrls: ['./student-cards.component.css']
})
export class StudentCardsComponent {
  public studentcards:any = [];
  public term:string ="";

  public column:string="";
  public order:string="";

  public count:number=0;
  public page:number=0;

  constructor( private _studentCardsService:StudentCardsService){
    -_studentCardsService.getstudentcards().subscribe(
      (data:any)=>{
        this.studentcards = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  filter(){
    this._studentCardsService.getFilteredstudentcards(this.term).subscribe(
      (data:any)=>{
        this.studentcards = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  sort(){
    this._studentCardsService.getSortedstudentcards(this.column, this.order).subscribe(
      (data:any)=>{
        this.studentcards = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  limit(){
    this._studentCardsService.getLimitedstudencards( this.count,this.page).subscribe(
      (data:any)=>{
        this.studentcards = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
}
