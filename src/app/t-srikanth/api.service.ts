import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseurl:string='http://localhost:3000/users';
  constructor(private http:HttpClient) { }
  getRegisteredUser(){
    return this.http.get<User[]>(`${this.baseurl}`)
  }
  getRegisteredUserById(id:number){
    return this.http.get<User>(`${this.baseurl}/${id}`)
  }
  postRegistration(registerObj:User){
    return this.http.post<User>(`${this.baseurl}`,registerObj)
  }
  updateRegisteredUser(registerObj:User,id:number){
    return this.http.put<User>(`${this.baseurl}/${id}`,registerObj)
  }
  deleteRegisterUser(id:number){
    return this.http.delete<User>(`${this.baseurl}/${id}`)
  }
}
