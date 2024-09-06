import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public name:string="asadf";
  public age:number=25;

  public user:User = {name:'asadf', age:25, email:'adfs@gmail.com'};
}
