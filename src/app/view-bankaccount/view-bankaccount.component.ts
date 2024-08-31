import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankaccountService } from '../bankaccount.service';

@Component({
  selector: 'app-view-bankaccount',
  templateUrl: './view-bankaccount.component.html',
  styleUrls: ['./view-bankaccount.component.css']
})
export class ViewBankaccountComponent {

  public bankaccount:any = {};

  constructor(private _activatedRoute:ActivatedRoute, private _bankAccountService:BankaccountService){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        _bankAccountService.getbankaccount(data.id).subscribe(
          (data:any)=>{
            this.bankaccount = data;
          }
        )
      }
    )
  }
}
