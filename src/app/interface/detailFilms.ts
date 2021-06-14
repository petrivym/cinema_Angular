import {Gener} from "./gener";
import {DetailsCountry} from "./details-country";
import {Production_companies} from "./production_companies";

export interface DetailFilms {
  backdrop_path: string,
  genres: Array<Gener>,
  original_language: string,
    "production_companies":Array<Production_companies>
    original_title: string,
    popularity: number,
    poster_path: string,
    production_countries: Array<DetailsCountry>
    release_date: string,
    status: string,
    title: string,
    runtime: number,
    vote_average: number,

}
