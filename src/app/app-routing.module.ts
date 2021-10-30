import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarHeroesComponent } from './Pages/buscar-heroes/buscar-heroes.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'busqueda',component:BuscarHeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
