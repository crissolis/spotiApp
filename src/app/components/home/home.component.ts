import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevo:any []=[];
 cargar:boolean;
 error:boolean;
 ms:string;
  constructor(private spotify:SpotifyService ) {
// this.http.get('https://restcountries.eu/rest/v2/lang/es').
// subscribe((datos: any) =>{
//   this.paises=datos;
//   console.log(datos);
// }
this.cargar=true;
this.error=false;
this.spotify.getNewReleases().subscribe(
  (datos:any)=>{
    console.log(datos);
    this.nuevo=datos;
this.cargar=false;

  },(ex) =>{
    this.cargar=false;
    this.error=true;
    this.ms=ex.error.error.message;
    console.log(ex);
  }
);
   }

  ngOnInit() {
  }

}
