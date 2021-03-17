import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Movie } from 'src/app/shared/Models/movie';
import { MovieDetailsService } from './service/movie-details.service';
import { MatDialog } from "@angular/material/dialog";
import { MovieDetailsPopupComponent } from '../../shared/components/movie-details-popup/movie-details-popup.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Movie = new Movie();
  similarMovies: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieDetSer: MovieDetailsService,
    public dialog: MatDialog,
    private router: Router
  ) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    movieDetSer.GetMovieDetails(id).subscribe((movieDet: Movie) => {
      this.movieDetails = movieDet;
    });

    movieDetSer.GetSimilarMovies(id).subscribe((movieDet: Movie[]) => {
      this.similarMovies = movieDet;
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

    this.activatedRoute.params.subscribe(params => {
      window.location.reload();
    });
  }
}
