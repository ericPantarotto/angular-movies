import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../utilities/app-config.service';
import { formatDateFormData } from '../utilities/utils';
import { actorCreationDTO, actorDTO, actorsMovieDTO } from './actor.model';
// import { StartConfigService } from '../utilities/start-config.service';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(
    private http: HttpClient,
    private environment: AppConfigService
    // private environment: StartConfigService
  ) {}

  private apiURL = this.environment.config['apiURL'] + '/people'; //NOTE: using runtine env configuration

  get(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<actorDTO[]>(this.apiURL, {
      observe: 'response',
      params,
    });
  }

  getById(id: number): Observable<actorDTO> {
    return this.http.get<actorDTO>(`${this.apiURL}/${id}`);
  }

  // searchByName(name: string): Observable<actorsMovieDTO[]> {
  searchByName(name: string): Observable<any> {
    // const headers = new HttpHeaders('Content-Type: application/json');
    // return this.http.post<actorsMovieDTO[]>(
    //   `${this.apiURL}/searchByName`,
    //   JSON.stringify(name),
    //   { headers }
    // );

    let params = new HttpParams();
    params = params.append('name', name);
    return this.http.get<actorsMovieDTO[]>(`${this.apiURL}/searchByName`, {
      observe: 'response',
      params,
    });
  }
  edit(id: number, actor: actorCreationDTO) {
    const formData = this.buildFormData(actor);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

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
