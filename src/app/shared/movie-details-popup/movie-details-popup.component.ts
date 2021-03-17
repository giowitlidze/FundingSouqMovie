import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TrendingDialogComponent } from 'src/app/trending/trending-dialog/trending-dialog.component';
import { Movie } from '../../shared/Models/movie';

@Component({
  selector: 'app-movie-details-popup',
  templateUrl: './movie-details-popup.component.html',
  styleUrls: ['./movie-details-popup.component.scss']
})
export class MovieDetailsPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TrendingDialogComponent>,
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
