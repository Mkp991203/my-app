import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankaccountService } from '../bankaccount.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-bank-accounts',
  templateUrl: './create-bank-accounts.component.html',
  styleUrls: ['./create-bank-accounts.component.css']
})
export class CreateBankAccountsComponent {

  public id:string = "";

  public bankaccountsForm:FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl()
  })

  constructor(private _bankAccountService:BankaccountService, private _activatedRoute:ActivatedRoute){
    
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id = data.id;

        _bankAccountService.getbankaccount(data.id).subscribe(
          (data:any)=>{
            this.bankaccountsForm.patchValue(data);
          }
        )
      }
    )
  } 

  createaccount(){
    console.log(this.bankaccountsForm.value);

    if(this.id){
      // edit
      this._bankAccountService.updatebankaccount(this.bankaccountsForm.value, this.id).subscribe(
        (data:any)=>{
          alert("Account Updated Successfully!!!");
        },
        (err:any)=>{
          alert("Account Updation Failed!!");
        } 
      )
    }

    else{
      this._bankAccountService.createbankaccounts(this.bankaccountsForm.value).subscribe(
        (data:any)=>{
          alert("Account Created Successfully!!!");
        },
        (err:any)=>{
          alert("Account Creation Failed!!");
        } 
      )
    }
  }
}
