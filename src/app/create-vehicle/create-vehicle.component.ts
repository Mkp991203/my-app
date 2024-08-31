import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public id:string = "";

  public vehicleFrom:FormGroup = new FormGroup({
    Vehicle: new FormControl(),       
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl()
  })

  constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id = data.id;

        // patching data from vehicles
        _vehicleService.getvehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicleFrom.patchValue(data);
          }
        )
      }
    )
  }

  create(){
    console.log(this.vehicleFrom.value);

    if(this.id){
      this._vehicleService.updateVehicle(this.vehicleFrom.value, this.id).subscribe(
        (data:any)=>{
          alert("Updated Successfully!!!");
          this.vehicleFrom.reset();
        },
        (err:any)=>{
          alert("Updation Failed!!");
        }
      )
    }

    else{
        // create
    this._vehicleService.createVehicle(this.vehicleFrom.value).subscribe(
        (data:any)=>{
          alert("Created Successfully!!!");
          this.vehicleFrom.reset();
        },
        (err:any)=>{
          alert("Creation Failed!!");
        }
    )
    }
    
  } 
}
