import { Component, OnInit } from '@angular/core';

import { MoviesInfoService } from '../../services/movies-info.service';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit {
  moviesList: Array<any>;
  constructor(private moviesInfoService: MoviesInfoService) {
    this.moviesList = moviesInfoService.getMovies();
  }

  ngOnInit() {}
}
