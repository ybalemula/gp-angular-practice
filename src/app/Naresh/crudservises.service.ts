import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudservisesService {

  public prodocts:any;
  constructor(private http:HttpClient) { }

  cruddata(obj:any){
  return  this.http.post("http://localhost:53434/api/empdatatable",obj);
  }
getprodoctsdata(){
 return this.prodocts={
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    
  }
}
public getdatachaildtoparent(){
return this.http.get("https://dummyjson.com/products/category/smartphones");
}
}
