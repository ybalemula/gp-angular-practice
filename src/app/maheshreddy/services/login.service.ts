import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }
  logindetails(obj:any):Observable<any>
  {
    const headers={'content-type':'application/json'}
    const body=JSON.stringify(obj);
    let url='http://localhost:44360/api/Auth/Login';
    return this._http.post(url,body,{'headers':headers});
  }

}
