import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }

  createUser(userObj: any):Observable<any>{
    return this.hc.post("/user/createusers",userObj);
  }

  getUser(username:any):Observable<any>{
    return this.hc.get(`/user/getusers/${username}`);
  }

  deleteUser(username:any):Observable<any>{
    return this.hc.delete(`/user/removeusers/${username}`)
  }

  updateUser(userObj:any):Observable<any>{
    return this.hc.put("/user/updateusers",userObj);
  }

  loginuser(usercred:any):Observable<any>{
    return this.hc.post("/user/login",usercred);
  }

}
