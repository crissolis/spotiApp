import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

   artista :any={};
   canciones:any=[];
   cargar:boolean;
  constructor(private router:ActivatedRoute,private spotify:SpotifyService) { 
    this.router.params.subscribe(
      params=>{
        this.getArtista(params['id'])
        this.getTopTracks(params['id'])

      }
    )
  }

  ngOnInit() {
  }

  getArtista(id:string){
    this.cargar=true;
this.spotify.getArtista(id).subscribe(
  artista=>{
    console.log(artista)
    this.artista=artista;
    this.cargar=false;
  }
)
  }

  getTopTracks(id:string){
this.spotify.getTopTracks(id).subscribe(
  tops=>{
    console.log(tops)
   this.canciones=tops;
  }
)
  }

}
