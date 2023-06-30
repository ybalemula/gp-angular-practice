import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudservisesService {

  public prodocts:any;
  contrlist:any;
  statelist:any;
  citylist:any;
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
//cuntry array function
public contryfun(){
return this.contrlist=[
  { cid:1, cname:"India"},{ cid:2,cname:"USA"},{cid:2,cname:"Aus"},]
}
//state array function
public statefun(){
return this.statelist= [
  {sid:1,sname:"Thelangana",cid:1},{sid:2,sname:"Andrapradhesh",cid:1},
  {sid:3,sname:"Thamilnadu",cid:1},{sid:4,sname:"Karnataka",cid:1},
  {sid:5,sname:"Dallas",cid:2},{sid:6,sname:"Chekago",cid:2},
  {sid:7,sname:"kalifoneya",cid:2},{sid:8,sname:"amere",cid:2}]
}
//city array function
public cityfun(){
return this.citylist=[
{ccname:"warangal",sid:1},{ccname:"Karimnagar",sid:1},{ccname:"Karimnagar",sid:1},
{ccname:"Vizag",sid:2},{ccname:"Karnul",sid:2},{ccname:"Thirupathi",sid:2},
{ccname:"Channai",sid:3},{ccname:"Madurai",sid:3},{ccname:"Salim",sid:3},
{ccname:"Benglur",sid:4},{ccname:"Mangulur",sid:4},{ccname:"Ballari",sid:4}]
}
}
