import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  movies!: { title: string; releaseDate: Date; price: number }[];
  timeout = 0;
  title = 'angular-movies';

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

  duplicateNumber(n: number) {
    return n * 2;
  }
}
