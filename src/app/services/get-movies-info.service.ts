import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovieInfo} from "../../../../cinema/src/app/interface/movie-Info";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetMoviesInfoService {
  url = 'https://api.themoviedb.org/3/movie/popular?language=ru&page=1&region=RU';

  constructor(private httpClient: HttpClient) {
  }

  getMoviesInfo(): Observable<[MovieInfo]> {
    return this.httpClient.get<any>(this.url).pipe(map(value => value.results))
  }

}
