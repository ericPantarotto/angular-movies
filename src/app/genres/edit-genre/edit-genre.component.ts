import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genreCreationDTO } from '../genres.model';
@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css'],
})
export class EditGenreComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  
  model: genreCreationDTO = { name: 'Drama' }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {});
  }

  saveChanges(genreCreationDTO: genreCreationDTO) {
    // ... save the genre
    console.log(genreCreationDTO);

  }
}
