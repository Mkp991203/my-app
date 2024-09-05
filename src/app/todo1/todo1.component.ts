import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component {

  constructor (private _todoService:TodoService){}

}
