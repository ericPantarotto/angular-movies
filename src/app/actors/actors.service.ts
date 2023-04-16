import { Injectable } from '@angular/core';
import { actorCreationDTO } from './actor.model';
import { formatDateFormData } from '../utilities/utils';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../utilities/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(
    private http: HttpClient,
    private environment: AppConfigService
  ) {}

  private apiURL = this.environment.config['apiURL'] + '/people'; //NOTE: using runtine env configuration

  create(actor: actorCreationDTO) {
    const formData = this.buildFormData(actor);
    return this.http.post(this.apiURL, formData);
  }

  private buildFormData(actor: actorCreationDTO): FormData {
    const formData = new FormData();

    formData.append('name', actor.name);

    if (actor.biography) {
      formData.append('biography', actor.biography);
    }

    if (actor.dateOfBirth) {
      formData.append('dateOfBirth', formatDateFormData(actor.dateOfBirth));
    }

    if (actor.picture) {
      formData.append('picture', actor.picture);
    }

    return formData;
  }
}
