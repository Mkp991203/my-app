import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm:FormGroup= new FormGroup({
    email : new FormControl(),
    password : new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/)])
  })

  constructor(private _loginService:LoginService, private _router:Router){}

  login(){
    console.log(this.loginForm);
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("Login Success");
        // store the token
        sessionStorage.setItem("token",data.token);
        //go to dashborad
        this._router.navigateByUrl("/dashboard");
      },
      (err:any)=>{
        alert("INvalid Credentials");
      }
    )
  }

  
}
