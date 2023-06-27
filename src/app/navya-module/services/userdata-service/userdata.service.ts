import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  UserUrl = "http://localhost:44360/api/Users";

  constructor(private http:HttpClient) { }

  getusersData():Observable<any>{
    return this.http.get(this.UserUrl);
  }
  addUsersData(entity :any):Observable<any>{
    return this.http.post(this.UserUrl, entity);
  }
}
