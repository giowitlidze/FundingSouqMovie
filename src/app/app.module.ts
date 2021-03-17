import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './components/trending/trending.component';
import { PopularComponent } from './components/popular/popular.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MovieDetailsPopupComponent } from './shared/components/movie-details-popup/movie-details-popup.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { PageNotfoundComponent } from './shared/components/page-notfound/page-notfound.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    PopularComponent,
    SearchMovieComponent,
    MovieDetailsPopupComponent,
    MovieDetailsComponent,
    HomeComponent,
    PageNotfoundComponent
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
