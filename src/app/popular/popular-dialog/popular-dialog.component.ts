import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movie } from '../../shared/Models/movie';

@Component({
  selector: 'app-popular-dialog',
  templateUrl: './popular-dialog.component.html',
  styleUrls: ['./popular-dialog.component.scss']
})
export class PopularDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopularDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public movieData: Movie
  ) {
    console.log(movieData)
  }

  ngOnInit(): void {
    console.log(this.movieData)

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
