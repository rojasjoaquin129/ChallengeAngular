import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from './Guards/autenticacion.guard';

import { BuscarHeroesComponent } from './Pages/buscar-heroes/buscar-heroes.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AutenticacionGuard]},
  {path:'busqueda',component:BuscarHeroesComponent,canActivate:[AutenticacionGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
