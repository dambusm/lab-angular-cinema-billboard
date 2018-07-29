import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';
import { MovieDisplayComponent } from './components/movie-display/movie-display.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MoviesHomeComponent }
  // { path: 'movie/:id', component: MovieDisplayComponent }
];

@NgModule({
  declarations: [AppComponent, MoviesHomeComponent, MovieDisplayComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
