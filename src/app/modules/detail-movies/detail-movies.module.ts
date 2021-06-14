import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DetailMoviesRoutingModule} from './detail-movies-routing.module';
import {DetailsMoviesComponent} from './components/details-movies/details-movies.component';
import {AppModule} from "../../app.module";
import {GetDetailsInfoService} from "./services/get-details-info.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DetailsInterceptorService} from "./services/details-interceptor.service";


@NgModule({
  declarations: [
    DetailsMoviesComponent,
  ],

  imports: [
    CommonModule,
    DetailMoviesRoutingModule,
    AppModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [GetDetailsInfoService, GetDetailsInfoService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: DetailsInterceptorService,
    multi: true
  },]
})
export class DetailMoviesModule {
}
