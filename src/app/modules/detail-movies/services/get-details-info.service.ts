import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieInfo} from "../../../interface/movie-Info";

@Injectable({
  providedIn: 'root'
})
export class GetDetailsInfoService {

  constructor(private httpClient: HttpClient) {
  }

  getMoviesDetailsInfo(id:string): Observable<MovieInfo> {
    return this.httpClient.get<MovieInfo>(`https://api.themoviedb.org/3/movie/${id}?language=ru`)
  }

}
