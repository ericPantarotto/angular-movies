import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters = [
      {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.99,
        poster:
          'https://moviesapiecr.blob.core.windows.net/movies/3bbbf918-4c87-4060-9280-b7aa5be5750d.jpg',
      },
      {
        title: 'Moana',
        releaseDate: new Date('2016-11-14'),
        price: 300.99,
        poster: 'https://moviesapiecr.blob.core.windows.net/movies/moana.jpg',
      },
    ];

    this.moviesFutureReleases = [];
  }

  title = 'angular-movies';
  moviesInTheaters!: {
    title: string;
    releaseDate: Date;
    price: number;
    poster: string;
  }[];
  moviesFutureReleases!: {
    title: string;
    releaseDate: Date;
    price: number;
    poster: string;
  }[];
  display = true;

  duplicateNumber(n: number) {
    return n * 2;
  }

  handleRating(rate: number) {
    alert(`The user selected ${rate}`);
  }
}
