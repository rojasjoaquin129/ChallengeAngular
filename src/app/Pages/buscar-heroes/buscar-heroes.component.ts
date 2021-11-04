
import { Component, OnInit } from '@angular/core';
import { Heroes } from 'src/app/interfaces/heroes.interface';
import { ConsumirApiService } from 'src/app/services/consumir-api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styleUrls: ['./buscar-heroes.component.scss']
})
export class BuscarHeroesComponent implements OnInit {
  listaHeroesTotal:any
  miLista:any[]=[];
  busqueda:any
  flag=false;
  aceptado=false;

  texto="Ingrese por favor un nombre para empezar  buscar"
  constructor(private api:ConsumirApiService) { }
  listaCopiada:any;
  ngOnInit(): void {
    this.miLista=JSON.parse(localStorage.getItem('lista') as string) ;
    if(!this.miLista){
      this.miLista=[];
    }
  }
  filtrarHeroe(){
    if(this.busqueda && this.busqueda.length>3){
      this.flag=true;
      this.api.ObtenerHeroesporNombre(this.busqueda).subscribe((usuarios:any)=>{
        if(usuarios.response==='error'){
          this.flag=false;
          this.texto="No se encontro ningun super Heroe con ese nombre";

        }else{
          this.listaHeroesTotal=usuarios.results;
        }
      } ,(error:any)=>{console.log(error)})
    }else{
      this.listaHeroesTotal=[];
      this.flag=false;
      this.texto="Ingrese por favor un nombre para empezar  buscar";
    }

  }
  verificarLista(heroe:any ){
    let retorno=true
    let estaEnLaLista=false
    let malos=0;
    let buenos=0;
    let esBuenoHeroe=false;
    console.log(this.miLista)
    if(this.miLista){
      if(heroe.biography.alignment==="good"){
        esBuenoHeroe=true;
      }
      if(this.miLista.length <= 6){
        for (let i = 0; i < this.miLista.length; i++) {
          if(this.miLista[i].biography.alignment==="good"){
            buenos++;
          }else{
            malos++;
          }
          if( heroe.id==this.miLista[i].id ){
            estaEnLaLista=true;
          }
        }
        if(esBuenoHeroe && buenos<3 && !estaEnLaLista){
          retorno=false;
        }else if( !esBuenoHeroe && malos<3 && !estaEnLaLista){
          retorno=false;
        }
        console.log(buenos);
        console.log(malos);

      }
    }else{
      console.log(this.miLista);
      retorno=false;
    }
    return retorno;
  }




  agregarALista(heroe:any){
    const heroeagregado={
      id:heroe.id,
      nombre:heroe.name,
      imagen:heroe.image.url,
      powerstats:{
        inteligencia:heroe.powerstats.intelligence,
        durabilidad:heroe.powerstats.durability,
        poder:heroe.powerstats.power,
        fuerza:heroe.powerstats.strength,
        combate:heroe.powerstats.combat,
        velocidad:heroe.powerstats.speed},
      peso:heroe.appearance.weight[1],
      altura:heroe.appearance.height[1],
      alias:heroe.biography.aliases[0],
      //colorOjos:heroe.appearance.eye-color,
      //ColorCabello:heroe.appearance.hair-color,
      lugarTrabajo:heroe.work.base,
    }
    console.log(heroe);
  }
  mensaje(heroe:any){
    Swal.fire({
      title: 'Quiere agregar a su lista este heroe?',
      showCancelButton: true,
      confirmButtonText: 'Si! quiero',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if(!this.verificarLista(heroe)){
          Swal.fire('Agregado', '', 'success').then(()=>{
            this.miLista.push(heroe);
            console.log(heroe);
            localStorage.setItem('lista',JSON.stringify(this.miLista));
          });


        }else{
          Swal.fire('No se pudo Agregar', 'el super heroe q quiere o ya lo tiene en la lista o ya lleno el cupo', 'error');
        }
      }
    });

  }




}

