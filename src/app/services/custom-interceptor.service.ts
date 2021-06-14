import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoaderService} from "./loader/loader.service";

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let clone = req.clone({
      headers: new HttpHeaders({
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWFkZTgwZjNkMTEwZWI4NjE4ZjkxZDVmM2ZhOTAwZiIsInN1YiI6IjYwYzNjNDlhZGMxY2I0MDA2ZDRhYWE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Ona2XveMNxwVnJ47-6HoFxD2AJrh6-G-BADg1OTgbM'
      })
    })
    return next.handle(clone)

  }
}
