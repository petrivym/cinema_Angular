import {Component, OnInit} from '@angular/core';
import {GetMoviesInfoService} from "../../services/get-movies-info.service";
import {MovieInfo} from "../../interface/movie-Info";

@Component({
  selector: 'app-movies-list-cards',
  templateUrl: './movies-list-cards.component.html',
  styleUrls: ['./movies-list-cards.component.css']
})
export class MoviesListCardsComponent implements OnInit {
  moviesInfo: [MovieInfo];

  constructor(private getMoviesInfoService: GetMoviesInfoService) {
  }

  ngOnInit(): void {
    this.getMoviesInfoService.getMoviesInfo().subscribe(value => this.moviesInfo = value,
      value => console.log(value.error.status_message))
  }

}
