import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component'
import { PageNotfoundComponent } from './shared/components/page-notfound/page-notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'MovieDetails/:id', component: MovieDetailsComponent },
  { path: '**', component: PageNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
