import { Component, OnInit } from '@angular/core';
import { movieTheatersCreationDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-create-theater',
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.css'],
})
export class CreateTheaterComponent {

  saveChanges(movieTheater: movieTheatersCreationDTO) {
    console.log(movieTheater);
  }
}
