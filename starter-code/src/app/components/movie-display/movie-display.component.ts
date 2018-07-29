import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesInfoService } from '../../services/movies-info.service';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {
  movieId: Number;
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private moviesInfoService: MoviesInfoService
  ) {}

  // This doesn't work! Tried several ways, couldn't figure it out:
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params.id;
      this.movie = this.moviesInfoService.getMovie(params.id);
    });
  }
}
