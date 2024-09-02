import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup =new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    age:new FormControl('',[Validators.required, Validators.min(18), Validators.max(60)]),
    phone: new FormControl('',[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl('', [Validators.required, Validators.email]),

    // 2. Nested Forms
    address: new FormGroup({
      state: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required])
    }),

    // 3.DynamicForms
    // -----------------

    type: new FormControl(),

    // busfee: new FormControl(),
    // hostelfee: new FormControl(),

    // 4. FormsArray
    cards: new FormArray([])

  });

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addcard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl('', [Validators.required]),
        expiry: new FormControl(),
        cvv: new FormControl()
      })
    )
  }

  constructor(){

    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholor'){
          this.userForm.addControl('busfee',new FormControl());
          this.userForm.removeControl('hostelfee');
        }
        else if(data=='residential'){
          this.userForm.addControl('hostelfee',new FormControl());
          this.userForm.removeControl('busfee');
        }
      }
    )
  }

  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }

  submit(){
    console.log(this.userForm);
  }

}