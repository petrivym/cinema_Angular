import {Component, OnInit} from '@angular/core';
import {GetDetailsPosterImgService} from "../../services/get-details-poster-img.service";
import {ActivatedRoute} from "@angular/router";
import {GetDetailsInfoService} from "../../services/get-details-info.service";
import {MovieInfo} from "../../../../interface/movie-Info";

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit {

  ulr: string;
  details: MovieInfo;

  constructor(private detailsInfoService: GetDetailsInfoService, private detailsPosterImgService: GetDetailsPosterImgService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.detailsInfoService.getMoviesDetailsInfo(value.id).subscribe(value => {
        this.details = value;
        console.log(value);
        this.detailsPosterImgService.getPosterUrl(5, value.backdrop_path).subscribe(value => this.ulr = value)
      })
    })
  }

  ngOnInit(): void {

  }

}
