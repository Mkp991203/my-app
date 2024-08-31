import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentCardsService } from '../student-cards.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public studentcardsForm:FormGroup= new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    dob: new FormControl(),
    profile_picture: new FormControl(),
    email: new FormControl(),
    school_logo: new FormControl(),
    school_name: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl()
  })

  constructor(private _studentCardsService:StudentCardsService){}

  createstudent(){
    console.log(this.studentcardsForm.value)

    this._studentCardsService.createstudentcards(this.studentcardsForm.value).subscribe(
      (data:any)=>{
        alert("Student Created Successfully!!!");
      },
      (err:any)=>{
        alert("Student Creation Failed!!");
      } 
    )
  }
}
