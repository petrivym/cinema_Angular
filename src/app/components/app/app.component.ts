import { Component } from '@angular/core';
import {LoaderService} from "../../services/loader/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cinema';

  constructor(public loaderService: LoaderService) {
  }
}
