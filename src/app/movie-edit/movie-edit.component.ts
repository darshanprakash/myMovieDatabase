import {Component, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../services/movie.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location) {
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.movieService.updateMovie(this.movie)
      .subscribe();
  }

  ngOnInit(): void {
    this.getMovie();
  }

}
