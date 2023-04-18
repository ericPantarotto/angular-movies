import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { movieTheatersCreationDTO } from '../movie-theaters.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-create-theater',
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.css'],
})
export class CreateTheaterComponent {
  constructor(
    private movieTheaterService: MovieTheatersService,
    private router: Router
  ) {}

  saveChanges(movieTheater: movieTheatersCreationDTO) {
    this.movieTheaterService.create(movieTheater).subscribe({
      complete: () => this.router.navigate(['/movietheaters']),
    });
  }
}
