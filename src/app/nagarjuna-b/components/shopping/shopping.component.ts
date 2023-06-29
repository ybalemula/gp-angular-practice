import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {
  public products:any[]=[];
 public Electronicscount:number=0;
 public Jewelerycount:number=0;
 public MensClothingcount:number=0;
 public WomensClothingcount:number=0;
 public Loadproduct(url:string)
 {
  fetch(url)
  .then(Response=>Response.json())
  .then(data=>
    {
      this.products=data;
      this.Electronicscount=data.filter(function(product:any){
      return product.category=='electronics'
     }).length
     this.Jewelerycount=data.filter(function(product:any){
       return product.category=='jewelery'

     }).length
     this.MensClothingcount=data.filter(function(product:any){
       return product.category=="men's clothing"

     }).length
     this.WomensClothingcount=data.filter(function(product:any){
        return product.category=="women's clothing"
     }).length
    })
  }
  ngOnInit(): void {
    this.Loadproduct(`https://fakestoreapi.com/products`);
    
  }
  public categorychanged(e:string)
  {
    this.Loadproduct(`https://fakestoreapi.com/products/category/${e}`);
  }
  public categoryselect(e:string)
  {
    this.Loadproduct(`https://fakestoreapi.com/products/category/${e}`);
  }

}
