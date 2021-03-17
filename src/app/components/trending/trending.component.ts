import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../../shared/Models/movie';
import { TrendingService } from './service/trending.service';
import { MatDialog } from "@angular/material/dialog";
import { MovieDetailsPopupComponent } from '../../shared/components/movie-details-popup/movie-details-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  movieList: Movie[] = [];

  constructor(
    private trendingService: TrendingService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.trendingService.GetMovies().subscribe(movies => {
      this.movieList = movies;
    });
  }

  ngOnInit(): void {

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


  movoToDetails(movieID: number) {
    this.router.navigate(['/MovieDetails', movieID]);
  }
}
