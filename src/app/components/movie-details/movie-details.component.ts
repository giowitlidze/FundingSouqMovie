import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Movie } from 'src/app/shared/Models/movie';
import { MovieDetailsService } from './service/movie-details.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Movie = new Movie();

  constructor(private route: ActivatedRoute, private movieDetSer: MovieDetailsService) {
    let id = this.route.snapshot.paramMap.get('id');

    movieDetSer.GetMovieDetails(id).subscribe((movieDet: Movie) => {
      this.movieDetails = movieDet;
      console.log({ movies: movieDet })
    });

  }

  ngOnInit(): void {

  }

}
