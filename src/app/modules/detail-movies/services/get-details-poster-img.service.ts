import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {GetBaseImgUrl} from "../../../interface/get-base-img-url";

@Injectable({
  providedIn: 'root'
})
export class GetDetailsPosterImgService {

  url = 'https://api.themoviedb.org/3/configuration'

  constructor(private httpClient: HttpClient) {
  }

  getPosterUrl(size: number, id: string): Observable<string> {
    return this.httpClient.get<GetBaseImgUrl>(this.url).pipe(map(value => value.images.base_url + value.images.poster_sizes[size] + '/' + id))
  }

}
