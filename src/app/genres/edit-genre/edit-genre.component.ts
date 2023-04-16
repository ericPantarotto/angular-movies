import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreUpdateDTO, genreCreationDTO, genreDTO } from '../genres.model';
import { GenresService } from '../genres.service';
@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css'],
})
export class EditGenreComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private genresService: GenresService,
    private router: Router
  ) {}

  model?: genreDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.genresService.getById(params['id']).subscribe((genre) => {
        this.model = genre;
      });
    });
  }

  saveChanges(genreUpdateDTO: GenreUpdateDTO) {
    this.genresService.edit(this.model!.id, genreUpdateDTO).subscribe(() => {
      this.router.navigate(['/genres']);
    });
  }
}
