import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movie } from '../../Models/movie';

@Component({
  selector: 'app-trending-dialog',
  templateUrl: './trending-dialog.component.html',
  styleUrls: ['./trending-dialog.component.scss']
})
export class TrendingDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TrendingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public movieData: Movie
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
