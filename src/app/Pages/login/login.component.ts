import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFrom:FormGroup;
  public email=new FormControl('',[Validators.required,Validators.email]);
  public password=new FormControl('',[Validators.required,Validators.minLength(6)]);

  constructor(
    private jwt:AuthService,
    private formB:FormBuilder,
    private router:Router
    ) {
        this.loginFrom=this.formB.group({
          email:this.email,
          password:this.password
        });
        this.loginFrom.reset();
     }

  ingresar(){
    const{email,password}=this.loginFrom.value;
    if(email==='challenge@alkemy.org' && password==='angular'){
      localStorage.setItem('usuario',email);
      this.router.navigate(['home']);
    } else{
      this.mensajeError('Usted No tiene validacion');
      this.loginFrom.reset();
    }
  }

  ngOnInit(): void {
  }
  acceso(){
    this.jwt.login();


  }
  mensajeError(texto: string){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text:texto,
    });
  }
}
