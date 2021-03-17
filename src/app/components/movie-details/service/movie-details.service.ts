import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Movie, ProductionCompanies } from '../../../shared/Models/movie';
import { HttpSettings } from 'src/app/shared/services/http/http-settings';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  private url: string;

  constructor(private http: HttpClient, private httpSettings: HttpSettings) {
    this.url = httpSettings.baseUrl + "movie/";
  }

  GetMovieDetails(movieID: any): Observable<Movie> {
    let movieList: Observable<Movie> = this.http.get<Movie>(this.url + movieID, this.httpSettings.httpOptions).
      pipe(
        retry(3),
        catchError(this.httpSettings.HandleError),
        map((data: any) => {

          let result: Movie = new Movie()
          result.id = data.id;
          result.title = data.title;
          result.releaseDate = data.release_date;
          result.voteAverage = data.vote_average;
          result.overview = data.overview;
          result.imageName = data.backdrop_path;
          result.voteCount = data.vote_count;
          result.posterName = data.poster_path;

          for (let g of data.genres) {
            result.genres.push({
              id: g.id,
              name: g.name
            });
          }

          for (let pComp of data.production_companies) {
            result.productionCompanies.push(
              new ProductionCompanies(
                pComp.id,
                pComp.logo_path,
                pComp.name,
                pComp.origin_country
              )
            );
          }

          return result;
        })
      );

    return movieList;
  }
}
