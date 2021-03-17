import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { TrendingDialogComponent } from './trending/trending-dialog/trending-dialog.component';
import { PopularComponent } from './popular/popular.component';
import { PopularDialogComponent } from './popular/popular-dialog/popular-dialog.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MovieDetailsPopupComponent } from './shared/movie-details-popup/movie-details-popup.component';
import { SearchDialogComponent } from './search-movie/search-dialog/search-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    TrendingDialogComponent,
    PopularComponent,
    PopularDialogComponent,
    SearchMovieComponent,
    MovieDetailsPopupComponent,
    SearchDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
