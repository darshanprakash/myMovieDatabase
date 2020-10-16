import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Movie} from '../movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private moviesUrl = 'api/movies';

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getMoviesByRating(rating: number): Observable<Movie[]> {
    const url = `${this.moviesUrl}/?avgRating=${rating}`;
    return this.http.get<Movie[]>(url);
  }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url);
  }

  updateMovie(movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, this.httpOptions);
  }

  addMovie(movie: Movie): Observable<any> {
    return this.http.post(this.moviesUrl, movie, this.httpOptions);
  }

  deleteMovie(movie: Movie): Observable<Movie> {
    const id = movie.id;
    const url = `${this.moviesUrl}/${id}`;
    return this.http.delete<Movie>(url, this.httpOptions);
  }

  searchMovie(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesUrl}/?title=${term}`);
  }
}
