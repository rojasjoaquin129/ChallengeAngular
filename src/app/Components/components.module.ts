import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaHeroesComponent } from './lista-heroes/lista-heroes.component';
import { HeroesDestallesComponent } from './heroes-destalles/heroes-destalles.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ListaHeroesComponent,
    HeroesDestallesComponent,
    BuscadorComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports:[
    NavbarComponent,
    BuscadorComponent,
  ]
})
export class ComponentsModule { }
