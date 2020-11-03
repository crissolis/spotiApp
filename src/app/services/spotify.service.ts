import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http:HttpClient) {
    console.log('todo bien')
   }


getQuery(query : string){

  const url =`https://api.spotify.com/v1/${query}`;
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQDISP9tB70k1PQbd9ZW3MDdn0_qpFrfYrGo-wt-A_dQBPPScMoKuhBmjvmEB1raMAT_PC3sbKsfotM26Bk'
  });

  return this.http.get(url,{headers});

}


  getNewReleases() {
   
    return this.getQuery('browse/new-releases?country=EC&limit=20').pipe(

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=EC', { headers }).pipe(
      map(
        data=>{
          return data['albums'].items;
        }
      )
    );
  }


  getArtistas(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&market=ec&limit=20`).pipe(

    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&market=ec&limit=15`, { headers }).pipe(
      map(
        data=>{
          return data['artists'].items;
        }
      )
    );
  }


  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
  //   .pipe(

  //   // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&market=ec&limit=15`, { headers }).pipe(
  //     map(
  //       data=>{
  //         return data['artists'].items;
  //       }
  //     )
  //   );
  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=ec`)
       .pipe(

    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&market=ec&limit=15`, { headers }).pipe(
      map(
        data=>{
          return data['tracks'];
        }
      )
    );

  }


}
