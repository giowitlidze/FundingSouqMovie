import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Movie } from '../../../shared/Models/movie';
import { HttpSettings } from 'src/app/shared/services/http/http-settings';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private url: string;
  trendingMovies: Movie[] = [];

  constructor(private http: HttpClient, private httpSettings: HttpSettings) {
    this.url = httpSettings.baseUrl + "trending/all/day";
  }

  GetMovies(): Observable<Movie[]> {
    let movieList: Observable<Movie[]> = this.http.get<Movie[]>(this.url, this.httpSettings.httpOptions).
      pipe(
        retry(3),
        catchError(this.httpSettings.HandleError),
        map((data: any) => {
          let results: Array<Movie> = [];
          for (let m of data.results) {
            let movie: Movie = new Movie(
              m.id,
              m.title,
              m.release_date,
              m.vote_average,
              m.overview,
              m.backdrop_path,
              m.vote_count);

            results.push(movie);
          }

          return results;
        })
      );

    return movieList;
  }
}
