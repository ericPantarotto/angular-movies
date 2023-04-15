import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css'],
})
export class FormGenreComponent {
  constructor(private formBuilder: FormBuilder) {}
  
  form?: FormGroup;
  @Input()
  model?: genreCreationDTO;

  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> =
    new EventEmitter<genreCreationDTO>();
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            // firstLetterUppercase(), //DEBUG:for tst display errors from the webapi
          ],
        },
      ],
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }


  getErrorMessageFieldName() {
    const field = this.form?.get('name');
    if (field?.hasError('required')) {
      return 'The name field is required';
    }
    if (field?.hasError('minlength')) {
      return 'The minimum length is 3';
    }
    if (field?.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }
    return '';
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form?.value);
  }
}
