import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';
import { parseWebAPIErrors } from 'src/app/utilities/utils';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  errors: string[] = [];
  
  constructor(private router: Router, private genresService: GenresService) { }

  ngOnInit(): void {}

  saveChanges(genreCreationDTO: genreCreationDTO) {
    // ... save the genre
    this.genresService.create(genreCreationDTO).subscribe({
      complete: () => this.router.navigate(['/genres']),
      error: (e) => this.errors = parseWebAPIErrors(e)
      // error: (e) => console.error(e),
    });

    //NOTE: deprecated https://rxjs.dev/deprecations/subscribe-arguments
    // this.genresService.create(genreCreationDTO).subscribe(() => {
    //   this.router.navigate(['/genres']);
    // }, error => console.log(error))

    // console.log(genreCreationDTO);
    // this.router.navigate(['/genres']);
  }
}
