import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ConsumirApiService {
  public path="https://superheroapi.com/api/10220226995480254/"

  constructor(private http:HttpClient) {
   }

  ObtenerHeroesPorId(id:number){
    return this.http.get(this.path+id);
  }
  ObtenerHeroesporNombre(nombre:string):Observable<any>{
   return this.http.get<any>('https://superheroapi.com/api.php/10220226995480254/search/'+nombre);
  }

}
