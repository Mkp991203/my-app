import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.css']
})
export class Todo2Component {
   
  constructor (private _todoService:TodoService){}
}
