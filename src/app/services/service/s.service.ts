import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ServiceService {
    constructor(private $http: HttpClient) {

    }

    getData(): Observable<any> {
       
       /* let headers = new HttpHeaders();
        headers = headers.append("x-rapidapi-host", "imdb-internet-movie-database-unofficial.p.rapidapi.com");
        headers = headers.append("x-rapidapi-key","a64f875e82mshe6fbea883934b6bp130de1jsn4d6873f72c1f");
        return this.$http.get('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/all', { headers });
    */
   return this.$http.get( 'https://api.themoviedb.org/3/discover/movie?api_key=15efcdb135848eb6e5b2bb268d883ffa');

    }
}
