import {Component, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../services/movie.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService,
              private router: Router,
              private authService: AuthService) {
  }

  logout(): void {
    this.authService.logout();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  addMovie(title: string, description: string, avgRating: number): void {
    title.trim();
    description.trim();
    if ( !title || !description ) {return; }
    this.movieService.addMovie({title, description, avgRating} as Movie)
      .subscribe(movie => this.movies.push(movie));
  }

  deleteMovie(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
    this.movieService.deleteMovie(movie).subscribe();
  }

  ngOnInit(): void {
    this.getMovies();
  }

}
