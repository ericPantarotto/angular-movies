import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  constructor() {}

  movies!: { title: string; releaseDate: Date; price: number }[];
  timeout = 2000;

  ngOnInit(): void {
    setTimeout(() => {
      // this.movies = [];
      this.movies = [
        {
          title: 'Spider-Man',
          releaseDate: new Date(),
          price: 1400.99,
        },
        {
          title: 'Moana',
          releaseDate: new Date('2016-11-14'),
          price: 300.99,
        },
      ];
    }, this.timeout);
  }
}
