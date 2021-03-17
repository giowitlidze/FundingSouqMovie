import { Component, Inject, OnInit } from '@angular/core';
import { Movie } from '../../shared/Models/movie';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SearchMovieComponent } from '../search-movie.component';


@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {
  movieList: Movie[] = [];

  constructor(
    public dialogRef: MatDialogRef<SearchMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public movieData: Movie
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
