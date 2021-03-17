import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Movie } from '../../../shared/Models/movie';
import { HttpSettings } from 'src/app/shared/services/http/http-settings';

@Injectable({
  providedIn: 'root'
})
export class PopularService {
  url: string;

  constructor(private http: HttpClient, private httpSettings: HttpSettings) {
    this.url = httpSettings.baseUrl + "movie/popular"
  }

  GetPopularMovies(): Observable<Movie[]> {
    let movieList: Observable<Movie[]> = this.http.get<Movie[]>(this.url, this.httpSettings.httpOptions).
      pipe(
        retry(3),
        catchError(this.httpSettings.HandleError),
        map((data: any) => {
          let results: Array<Movie> = [];
          for (let popularMovies of data.results) {
            let movie: Movie = new Movie(
              popularMovies.id,
              popularMovies.title,
              popularMovies.release_date,
              popularMovies.vote_average,
              popularMovies.overview,
              popularMovies.backdrop_path,
              popularMovies.vote_count);

            results.push(movie);
          }

          return results;
        })
      );

    return movieList;
  }
}
