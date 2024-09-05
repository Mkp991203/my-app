import { Injectable } from '@angular/core';
import { BehaviorSubject, count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonserviceService {
  
  private cartcount:number=0;
  private cartcountSubject:BehaviorSubject<number>= 
                  new BehaviorSubject(this.cartcount);

  constructor() { }

  addtocart(){
    this.cartcount++;
    this.cartcountSubject.next(this.cartcount);
  }

  getcartcount(){
    return this.cartcountSubject;
  }
}
