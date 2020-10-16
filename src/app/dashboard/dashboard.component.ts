import {Component, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../services/movie.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];
  selectedRating: number;

  constructor(private movieService: MovieService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getMovies();
  }

  logout(): void {
    this.authService.logout();
  }

  getMovies(): void {
    this.selectedRating = 0;
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  getMoviesByRating(rating: number): void {
    if (rating === 0) {
      return this.getMovies();
    }
    this.selectedRating = rating;
    this.movieService.getMoviesByRating(rating)
      .subscribe(movies => this.movies = movies);
  }

}
