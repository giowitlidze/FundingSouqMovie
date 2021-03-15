import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { TrendingService } from './service/trending.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  movieList: Movie[] = [];

  constructor(private trendingService: TrendingService) {
    this.trendingService.GetMovies().subscribe(movies => {
      this.movieList = movies;
    });

  }

  ngOnInit(): void {

  }

}
