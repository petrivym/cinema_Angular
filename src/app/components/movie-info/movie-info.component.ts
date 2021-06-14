import {Component, Input, OnInit} from '@angular/core';
import {MovieInfo} from "../../interface/movie-Info";
import {GenresService} from "../../services/genres.service";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input()
  movieInfo: MovieInfo;
  genre: Array<string>;

  constructor(private genresService: GenresService) {
  }

  ngOnInit(): void {
    this.genresService.getGenres(this.movieInfo.genre_ids).subscribe(value => this.genre = value)
  }


}
