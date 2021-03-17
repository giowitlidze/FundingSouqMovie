import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SearchMovieService } from './service/search-movie.service';
import { Movie } from '../../shared/Models/movie';
import { MovieDetailsPopupComponent } from '../../shared/components/movie-details-popup/movie-details-popup.component';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  movieList: Movie[] = [];

  constructor(private trendingService: SearchMovieService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  searchMovie(movieName: string) {
    console.log(movieName);
    this.trendingService.SearchMovies(movieName).subscribe(movies => {
      this.movieList = movies;
    });
  }

  onSearchKeyPress(event: any) {
    if (event.target.value.length >= 3)
      this.searchMovie(event.target.value)
  }

  showMovieDetails(movie: Movie) {
    this.dialog.open(MovieDetailsPopupComponent, {
      data: {
        imageName: movie.imageName,
        detailedImgUrl: movie.detailedImgUrl,
        overview: movie.overview,
        releaseDate: movie.releaseDate,
        title: movie.title,
        voteAverage: movie.voteAverage,
        voteCount: movie.voteCount,
      }
    });
  }
}
