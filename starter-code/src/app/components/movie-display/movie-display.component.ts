import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesInfoService } from '../../services/movies-info.service';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {
  movieId: number;
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private moviesInfoService: MoviesInfoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => (this.movieId = Number(params['id']))
    );
    // If I comment out the line below, the line above stops working (this.movieId doesn't get set). WHY????!!!???
    this.movie = this.moviesInfoService.getMovie(this.movieId);
  }
}
