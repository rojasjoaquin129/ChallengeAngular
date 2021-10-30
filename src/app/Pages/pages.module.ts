import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../Components/components.module';
import { BuscarHeroesComponent } from './buscar-heroes/buscar-heroes.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    BuscarHeroesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
