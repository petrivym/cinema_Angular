import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieInfo} from "../../../../cinema/src/app/interface/movie-Info";
import {map} from "rxjs/operators";
import {GetBaseImgUrl} from "../../../../cinema/src/app/interface/get-base-img-url";

@Injectable({
  providedIn: 'root'
})
export class GetPosterImgService {

  url = 'https://api.themoviedb.org/3/configuration'

  constructor(private httpClient: HttpClient) {
  }

  getPosterUrl(size:number): Observable<string> {
    return this.httpClient.get<GetBaseImgUrl>(this.url).pipe(map(value => value.images.base_url + value.images.poster_sizes[size]))
  }

}
