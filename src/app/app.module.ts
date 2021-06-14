import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MoviesListCardsComponent} from './components/movies-list-cards/movies-list-cards.component';
import {MoviesListCardComponent} from './components/movies-list-cards/movies-list-card/movies-list-card.component';
import {PosterPreviewComponent} from './components/poster-preview/poster-preview.component';
import {MovieInfoComponent} from './components/movie-info/movie-info.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CustomInterceptorService} from "./services/custom-interceptor.service";
import {LoadingInterceptorService} from "./services/loader/loading-interceptor.service";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


let routes = [{path: '', component: MoviesListComponent},
  {
    path: 'detailsMovie/:id',
    loadChildren: () => import('./modules/detail-movies/detail-movies-routing.module').then(m => m.DetailMoviesRoutingModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesListCardsComponent,
    MoviesListCardComponent,
    PosterPreviewComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptorService,
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
