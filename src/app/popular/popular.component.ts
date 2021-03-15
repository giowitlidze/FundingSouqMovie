import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from '../shared/Models/movie';
import { PopularDialogComponent } from './popular-dialog/popular-dialog.component';
import { PopularService } from './service/popular.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  popularMovieList: Movie[] = [];

  constructor(private trendingService: PopularService, public dialog: MatDialog) {
    this.trendingService.GetPopularMovies().subscribe(movies => {
      this.popularMovieList = movies;
    });

  }

  ngOnInit(): void {

  }

  showMovieDetails(movie: Movie) {
    this.dialog.open(PopularDialogComponent, {
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
