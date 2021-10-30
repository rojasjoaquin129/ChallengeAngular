import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER:string='http://challenge-react.alkemy.org/';
  user:any={
    Email:"challenge@alkemy.org",
    Password:"angular"
  }
  constructor(private http: HttpClient) { }
  login(){
    return this.http.post(this.AUTH_SERVER,this.user).pipe(tap(
      (res:any)=>{
        console.log(res);
      }
    ))
  }
}
