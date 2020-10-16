import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

import {Movie} from '../movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      {
        id: 1,
        title: 'Inception',
        avgRating: 4,
        comments: '',
        description: 'Interesting movie',
        myRating: 0,
      },
      {
        id: 2,
        title: 'Avatar',
        avgRating: 4,
        comments: '',
        description: 'Interesting movie',
        myRating: 0,
      },
      {
        id: 3,
        title: 'Dark Night',
        avgRating: 4,
        comments: '',
        description: 'Interesting movie',
        myRating: 0,
      },
      {
        id: 4,
        title: 'Independence Day',
        avgRating: 3,
        comments: '',
        description: 'Interesting movie',
        myRating: 0,
      },
      {
        id: 5,
        title: 'iRobot',
        avgRating: 3,
        comments: '',
        description: 'Interesting movie',
        myRating: 0,
      },
      {
        id: 6,
        title: 'Kirik Party',
        avgRating: 4,
        comments: '',
        description: 'Interesting movie',
        myRating: 0,
      },
      {
        id: 7,
        title: 'Uri',
        avgRating: 5,
        comments: '',
        description: 'Interesting movie',
        myRating: 0,
      },
      {
        id: 8,
        title: 'Ted',
        avgRating: 4,
        comments: '',
        description: 'Interesting movie',
        myRating: 0,
      },
      {
        id: 9,
        title: 'Cry Wolf',
        avgRating: 5,
        comments: '',
        description: 'Interesting movie',
        myRating: 0,
      },
      {
        id: 10,
        title: 'Twilight',
        avgRating: 1,
        comments: '',
        description: 'Interesting movie',
        myRating: 0,
      },
      {
        id: 11,
        title: 'Pursuit of Happiness',
        avgRating: 4,
        comments: '',
        description: 'Interesting movie',
        myRating: 0,
      }
    ];
    return {movies};
  }

  genID(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1;
  }
}
