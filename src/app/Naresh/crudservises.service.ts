import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudservisesService {

  constructor(private http:HttpClient) { }
  cruddata(obj:any){
  return  this.http.post("http://localhost:53434/api/empdatatable",obj);
  }
}
