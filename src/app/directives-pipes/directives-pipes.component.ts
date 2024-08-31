import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-pipes',
  templateUrl: './directives-pipes.component.html',
  styleUrls: ['./directives-pipes.component.css']
})
export class DirectivesPipesComponent {

    public ages:number[] = [10,20,30,40,50];

    public states:string[] = ["Telangana","Andhra","Kerela","TN","Karnataka"];

    public users:any = [
      {name:'A', age:'16', phone:'5248471', marks:90},
      {name:'B', age:'17', phone:'9248471', marks:80},
      {name:'C', age:'40', phone:'6248471', marks:34},
      {name:'D', age:'50', phone:'8248471', marks:-20},
      {name:'E', age:'10', phone:'6248471', marks:67},
      {name:'F', age:'60', phone:'8248471', marks:45},
    ]

    public today:any = new Date();
    
}
