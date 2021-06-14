import {Component, Input, OnInit} from '@angular/core';
import {MovieInfo} from "../../../interface/movie-Info";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent implements OnInit {
  @Input()
  movieInfo: MovieInfo
  constructor() { }

  ngOnInit(): void {
  }

}
