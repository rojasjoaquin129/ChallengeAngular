import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,
    private authservice:AuthService) { }

  ngOnInit(): void {
  }
  busqueda(){
    this.router.navigate(['/busqueda']);

  }
  casa(){
    this.router.navigate(['home']);
  }

  loginOut(){
    this.authservice.logOut();
    this.router.navigate(['']);
    localStorage.clear();
  }
}
