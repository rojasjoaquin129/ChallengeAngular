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
    private router:Router,
    private authService:AuthService,
    ) {
        this.loginFrom=this.formB.group({
          email:this.email,
          password:this.password
        });
        this.loginFrom.reset();
     }

  ingresar(){
    const{email,password}=this.loginFrom.value;
    this.authService.LoginDos(email,password).then((usuario)=>{
      console.log(usuario.user?.multiFactor);
      this.authService.estaLogeado=true;
      localStorage.setItem('usuario',email);
      this.router.navigate(['home']);
    }).catch(error=>{
      if(error.code==='auth/wrong-password'){
        this.mensajeError('El usuario no esta Autenticado ni en la base de datos ');
        this.loginFrom.reset();
      }
    });
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
