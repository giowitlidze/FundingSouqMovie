import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movie } from '../../../shared/Models/movie';

@Component({
  selector: 'app-movie-details-popup',
  templateUrl: './movie-details-popup.component.html',
  styleUrls: ['./movie-details-popup.component.scss']
})
export class MovieDetailsPopupComponent<T> implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<T>,
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
