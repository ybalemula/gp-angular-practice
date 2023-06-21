import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginpageService {

  constructor(private httpclient: HttpClient) { }
  DataList:any [] = [];
  login(obj: any) :Observable<any>{
   
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(obj);
    let url = 'http://localhost:44360/api/Auth/Login';
    return this.httpclient.post(url , body,{'headers':headers})

  }
}
