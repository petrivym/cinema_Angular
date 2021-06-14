import {Component, Input, OnInit} from '@angular/core';
import {GetPosterImgService} from "../../services/get-poster-img.service";

@Component({
  selector: 'app-poster-preview',
  templateUrl: './poster-preview.component.html',
  styleUrls: ['./poster-preview.component.css']
})
export class PosterPreviewComponent implements OnInit {
  posterUrl: string
  @Input()
  posterMovie: string;


  constructor(private getPosterImgService: GetPosterImgService) {

    this.getPosterImgService.getPosterUrl(2).subscribe(value => this.posterUrl = value + this.posterMovie,
      error => console.warn(error.error))
  }

  ngOnInit(): void {
  }

}
