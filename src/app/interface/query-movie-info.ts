import {MovieInfo} from "./movie-Info";

export interface QueryMovieInfo {
  page: string;
  results: [MovieInfo];
  total_total_pages: number;
  total_results: number;
}
