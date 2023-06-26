import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  MenuUrl="http://localhost:44360/api/Menus";

  constructor(private http:HttpClient) { }

  getmenusData():Observable<any>{
    const token = localStorage.getItem('token'); 
    let head_obj = new HttpHeaders().set("Authorization","bearer "+token); 
    return this.http.get(this.MenuUrl,{headers:head_obj});
  }
}
