import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Movie } from '../../Models/movie';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private url = "https://api.themoviedb.org/3/trending/all/day";
  trendingMovies: Movie[] = [];

  constructor(private http: HttpClient) { }

  GetMovies(): Observable<Movie[]> {
    const params = new HttpParams().set("api_key", "0f367a670dcdae8ade7c81b2386a13a3");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: params
    };

    let movieList: Observable<Movie[]> = this.http.get<Movie[]>(this.url, httpOptions).pipe(
      retry(3),
      catchError(this.handleError),
      map((data: any) => {
        let results: Array<Movie> = [];
        for (let m of data.results) {
          let movie: Movie = new Movie(m.id, m.title, m.release_date, m.vote_average, m.overview, m.backdrop_path);
          results.push(movie);
        }
        // results = data.results;
        return results;
      })
    );

    return movieList;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError(
      'Something bad happened; please try again later.');
  }
}
