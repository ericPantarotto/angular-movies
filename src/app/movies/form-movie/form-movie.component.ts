import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css'],
})
export class FormMovieComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form?: FormGroup;

  @Input()
  model?: movieDTO;

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  @Input()
  nonSelectedGenres: multipleSelectorModel[] = [];

  selectedGenres: multipleSelectorModel[] = [];

  @Input()
  nonSelectedMovieTheaters: multipleSelectorModel[] = [];
  
  selectedMovieTheaters: multipleSelectorModel[] = [];

  @Input()
  actorsArray: number[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheatersIds: '',
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);

      this.model.genresIds.forEach((id) =>
        this.selectedGenres.push(this.nonSelectedGenres[id - 1])
      );
      this.model.movieTheatersIds.forEach((id) =>
        this.selectedMovieTheaters.push(this.nonSelectedMovieTheaters[id - 1])
      );

      for (let index = 0; index < this.model.genresIds.length; index++) {
        // console.log(`${index}, value: ${this.model.genresIds[index]}`);
        this.nonSelectedGenres.splice(
          this.model.genresIds[index] - 1 - index,
          1
        );
      }
      for (let index = 0; index < this.model.movieTheatersIds.length; index++) {
        this.nonSelectedMovieTheaters.splice(
          this.model.movieTheatersIds[index] - 1 - index,
          1
        );
      }
    }
  }

  onImageSelected(file: File) {
    this.form?.get('poster')?.setValue(file);
  }

  changeMarkdown(content: string) {
    this.form?.get('summary')?.setValue(content);
  }

  saveChanges() {
    const genresIds = this.selectedGenres.map((value) => value.key);
    this.form?.get('genresIds')?.setValue(genresIds);

    const movieTheatersIds = this.selectedMovieTheaters.map(
      (value) => value.key
    );
    this.form?.get('movieTheatersIds')?.setValue(movieTheatersIds);

    this.onSaveChanges.emit(this.form?.value);
  }
}
