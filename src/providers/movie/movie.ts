import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=4b58eb3ff1659e5bbc851f385d044114`);
  }

  getMoviesDetail(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=4b58eb3ff1659e5bbc851f385d044114`);
  }
}
