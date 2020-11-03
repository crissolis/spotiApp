import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  nuevo:any []=[];
  cargar:boolean;
  constructor(private spotify : SpotifyService) {

   }

  ngOnInit() {
  }

  buscar(parametro:string){
console.log(parametro)
this.cargar=true;
this.spotify.getArtistas(parametro).subscribe(
  (datos:any)=>{
    console.log(datos);
   this.nuevo=datos;
   this.cargar=false;

  }
)
  }

}
