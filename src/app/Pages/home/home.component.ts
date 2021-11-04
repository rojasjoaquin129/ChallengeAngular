import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  miLista:any;
  texto="usted no tiene heroes seleccionados para su Equipo";
  flag=false;
  listaDatos:any[]=[];
  heroeSeleccionado:any=null;

  constructor() { }

  ngOnInit(): void {
   this.miLista=JSON.parse(localStorage.getItem('lista') as string) ;
   if(this.miLista){
     this.flag=true
     this.acumulador();
   }

  }

  acumulador(){
    this.listaDatos=[];
    const inteligencia=['Inteligencia',0];
    const durabilidad=['Durabilidad',0];
    const poder=['Poder',0];
    const conbate=['Combate',0];
    const fuerza=['Fuerza',0];
    const velocidad=['Velocidad',0];
    for (let i = 0; i < this.miLista.length; i++) {

      inteligencia[1]=Number(this.miLista[i].powerstats.intelligence)+Number(inteligencia[1]);
      durabilidad[1]=Number(this.miLista[i].powerstats.durability)+Number(durabilidad[1]);;
      poder[1]=Number(this.miLista[i].powerstats.power)+Number(poder[1]);
      conbate[1]=Number(this.miLista[i].powerstats.strength)+Number(conbate[1]);
      fuerza[1]=Number(this.miLista[i].powerstats.combat)+Number(fuerza[1]);
      velocidad[1]=Number(this.miLista[i].powerstats.speed)+Number(velocidad[1]);

      }
      this.listaDatos.push(inteligencia);
      this.listaDatos.push(durabilidad);
      this.listaDatos.push(poder);
      this.listaDatos.push(conbate);
      this.listaDatos.push(fuerza);
      this.listaDatos.push(velocidad);
      this.listaDatos.sort(((a,b)=> b[1]-a[1]));
      console.log(this.listaDatos);
    }


    comparar ( a:any, b:any ){ return a[1] - b[1]; }
  detalles(heroe:any){
    this.heroeSeleccionado=heroe;


    Swal.fire({
      title: 'Detalles',
      text: "Peso :" + heroe.appearance.weight[1]  +
            "Altura : " + heroe.appearance.height[1] +
            "Alias  : " + heroe.biography.aliases[0] +
            "Lugar De Trabajo : "+ heroe.work.base,

      imageUrl: heroe.image.url,
      imageWidth: 200,
      imageHeight: 300,
      imageAlt: 'Custom image',
      customClass:{
        cancelButton: 'btn btn-danger'
      },
      confirmButtonText: 'si, quiero borrar este heroe!',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarHeroe(heroe);

        Swal.fire(
          'Eliminado',
          'Tu heroe fue removido con exito.',
          'success'
        ).then(()=>{
          this.acumulador();
        })
      }
    })
  }
  eliminarHeroe(heroe:any){
    const index=this.miLista.findIndex( (hero:any)=>hero.id===heroe.id);
    this.miLista.splice(index,1);
    localStorage.removeItem('lista');
    localStorage.setItem('lista',JSON.stringify(this.miLista));
  }

}


