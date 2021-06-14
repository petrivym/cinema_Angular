import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailsMoviesComponent} from "./components/details-movies/details-movies.component";

const routes: Routes = [{path: '', component: DetailsMoviesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailMoviesRoutingModule {
}
