import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent {
  model: movieDTO = {
    title: 'Spider-Man',
    inTheaters: true,
    summary: 'whatever',
    releaseDate: new Date(),
    trailer: 'ABCDE',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    genresIds: [1, 3],
    movieTheatersIds: [2, 3],
  };

  actorsArray: number[] = [3,2];

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {});
  }

  saveChanges(movieCreationDTO: movieCreationDTO) {}
}
