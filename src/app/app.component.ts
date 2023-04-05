import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-movies';

  movie = {
    title: 'Spider-Man',
    releaseDate: new Date(),
    price: 1400.99
  };
  duplicateNumber(n: number) {
    return n * 2;
  }
}
