import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';
import { actorsMovieDTO } from 'src/app/actors/actor.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent {
  model?: movieDTO;
  // model: movieDTO = {
  //   title: 'Spider-Man',
  //   inTheaters: true,
  //   summary: 'whatever',
  //   releaseDate: new Date(),
  //   poster:
  //     'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg',
  // };

  selectedActors: actorsMovieDTO[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {});
  }

  saveChanges(movieCreationDTO: movieCreationDTO) {}
}
