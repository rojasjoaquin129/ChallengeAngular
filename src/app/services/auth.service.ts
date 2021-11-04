import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
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
  public estaLogeado=false;
  constructor(private http: HttpClient, public auth: AngularFireAuth) { }
  login(){
    return this.http.post(this.AUTH_SERVER,this.user).pipe(tap(
      (res:any)=>{
        console.log(res);
      }
    ))
  }
  LoginDos(email:string,password:string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }
  logOut(){
    return this.auth.signOut();
  }
}
