import { Component, OnInit } from '@angular/core';
import { MovieTheatersService } from '../movie-theaters.service';
import { movieTheatersDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-index-theaters',
  templateUrl: './index-theaters.component.html',
  styleUrls: ['./index-theaters.component.css'],
})
export class IndexTheatersComponent implements OnInit {
  movieTheaters: movieTheatersDTO[] = [];
  displayColumns = ['name', 'actions'];
  
  constructor(private movieTheatersService: MovieTheatersService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.movieTheatersService
      .get()
      .subscribe((movieTheaters) => (this.movieTheaters = movieTheaters));
  }

  delete(id: number) {
    this.movieTheatersService.delete(id).subscribe(() => this.loadData());
  }
}
