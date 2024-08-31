import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

    public vehicles:any = [];
    public term:string = "";

    public column:string = "";
    public order:string = "";

    constructor(private _vehicleServices:VehicleService, private _router:Router){
      _vehicleServices.getVehicles().subscribe(
        (data:any)=>{
          this.vehicles = data;
        },
         
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }

    filter(){
      this._vehicleServices.getFilteredVehicles(this.term).subscribe(
        (data:any)=>{
          this.vehicles= data;
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }

    sort(){
      this._vehicleServices.getsortedVehicles(this.column, this.order).subscribe(
        (data:any)=>{
          this.vehicles= data;
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )  
    }

    delete(id:string){
      this._vehicleServices.deleteVehicle(id).subscribe(
        (data:any)=>{
          alert( "deleted successfully!!!")
          location.reload();
        },
        (err:any)=>{
          alert("deletion failed");
        }
      )
    }

    view(id:string){
      this._router.navigateByUrl("/dashboard/view-vehicle/"+id);
    }

    edit(id:string){
     this._router.navigateByUrl("/dashboard/edit-vehicle/"+id);
    }

}
