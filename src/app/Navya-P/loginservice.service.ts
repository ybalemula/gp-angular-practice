import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  

  LoginUrl="http://localhost:44360/api/Auth/Login";

  constructor(private http:HttpClient) { }
  
  LoginUseData(data:any){
    return this.http.post<any>(this.LoginUrl,data);
  }
}
