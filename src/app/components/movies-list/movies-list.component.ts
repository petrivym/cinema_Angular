import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../../services/loader/loader.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
