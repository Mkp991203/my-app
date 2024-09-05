import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // create subject
    private countsubject:BehaviorSubject<number> =new BehaviorSubject(0);

  constructor() { }

  // set value
  setcount(value:number){
    this.countsubject.next(value);
  }

  // get value
  getcount(){
    return this.countsubject;
  }

  // ============================================

  private cartcount=0;

  private cartcountsubject:BehaviorSubject<number>=
               new BehaviorSubject(this.cartcount);

    
    addcart(){
      this.cartcount++;
      this.cartcountsubject.next(this.cartcount);
    }

    getcartcount(){
      return this.cartcountsubject;
    }
}
