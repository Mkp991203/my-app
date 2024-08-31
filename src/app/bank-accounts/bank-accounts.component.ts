import { Component } from '@angular/core';
import { BankaccountService } from '../bankaccount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent {

  public id:string = "";

  public bankaccounts:any = [];
  public term:string="";

  public column:string = "";
  public order:string = "";

  public count:any = "";
  public page:any = "";

  constructor(private _bankAccountservice:BankaccountService, private router:Router){
    _bankAccountservice.getbankaccounts().subscribe(
      (data:any)=>{
        this.bankaccounts = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  filter(){
    this._bankAccountservice.getFilteredbankaccounts(this.term).subscribe(
      (data:any)=>{
        this.bankaccounts = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      } 
    )
  }

    sort(){
      this._bankAccountservice.getSortedbankaccounts(this.column, this.order).subscribe(
        (data:any)=>{
          this.bankaccounts = data;
        },
        (err:any)=>{
          alert("Internal Server Error");
        } 
      )
    }

    limit(){
      this._bankAccountservice.getLimitdbankaccounts(this.count, this.page).subscribe(
        (data:any)=>{
          this.bankaccounts = data;
        },
        (err:any)=>{
          alert("Internal Server Error");
        } 
      )
    }

    view(id:string){
      this.router.navigateByUrl("/dashboard/view-bankaccount/"+id);
    }

    edit(id:string){
      this.router.navigateByUrl("/dashboard/edit-bankaccount/"+id);
    }

}
