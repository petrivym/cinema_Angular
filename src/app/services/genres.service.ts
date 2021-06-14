import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map} from "rxjs/operators";
import {generate, Observable} from "rxjs";
import {Genres} from "../../../../cinema/src/app/interface/genres";
import {Gener} from "../../../../cinema/src/app/interface/gener";

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  url = 'https://api.themoviedb.org/3/genre/movie/list?language=ru'
  result: Array<string> = []

  constructor(private httpClient: HttpClient) {
  }

  getGenres(id: any): Observable<any> {
    return this.httpClient.get<any>(this.url).pipe(map(value => {
      this.result = []
      for (const valueElement of value.genres) {
        for (const idGeneris of id) {
          if (valueElement.id === idGeneris) {
            this.result.push(valueElement.name.toUpperCase())
          }
        }
      }
      return this.result
    }))
  }


}
