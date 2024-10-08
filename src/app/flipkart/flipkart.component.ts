import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  
  public term:string = "";
  public products:any= [
    {name:'pen', price: 50, rating: 5, freedelivery:true},
    {name:'smartphone', price: 25000, rating: 3.8, freedelivery:true},
    {name:'Iphone', price: 90000, rating: 5, freedelivery:false},
    {name:'shirt', price: 2700, rating: 2.6, freedelivery:true},
    {name:'shoes', price: 5000, rating: 0.3, freedelivery:false},
    {name:'smartwatch', price: 4500, rating: 4.2, freedelivery:true},
    {name:'laptop', price: 56000, rating: 3.0, freedelivery:false},
    {name:'Ipad', price: 45000, rating: 4.8, freedelivery:true},
    {name:'charger', price: 2500, rating: 2.4, freedelivery:true},
    {name:'powerbank', price: 6000, rating: 4.9, freedelivery:false}
   
  ]

   filter(){
    this.products= this.products.filter((product:any)=>product.name.includes(this.term));
   }

   ofd(){
    
  //   for(let i=0;i<this.products.length;i++){
  //     if(!this.products[i].freedelivery){
  //       this.products.splice(i,1);
  //     }
  //   }
    this.products= this.products.filter((product:any)=>product.freedelivery==true);
  }

  plh(){
    this.products= this.products.sort((a:any,b:any)=>a.price-b.price);
  }

  phl(){
    this.products= this.products.sort((c:any,d:any)=>d.price-c.price);
  }

  rlh(){
    this.products= this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }

  rhl(){
    this.products= this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }
  
  afd(){
    this.products= this.products.map((product:any)=>{
      product.price= product.price/2;
      return product;
      // product.price= product.price-product.price*50/100;
    })
  }

  pdc(){
    this.products= this.products.map((product:any)=>{
      product.price= product.price+50;
      return product;
    })
  }

  tp(){
    var total= this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert(total);
  }

  tci(){
    alert(this.products.length);
  }

  delete(i:number){
    this.products.splice(i,0);
  }

}
