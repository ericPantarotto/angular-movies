import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../utilities/app-config.service';
import {
  movieTheatersCreationDTO,
  movieTheatersDTO,
} from './movie-theaters.model';

@Injectable({
  providedIn: 'root',
})
export class MovieTheatersService {
  constructor(
    private http: HttpClient,
    private environment: AppConfigService
  ) {}

  private apiURL = this.environment.config['apiURL'] + '/movietheaters'; //NOTE: using runtine env configuration

  public get(): Observable<movieTheatersDTO[]> {
    return this.http.get<movieTheatersDTO[]>(this.apiURL);
  }

  public getById(id: number): Observable<movieTheatersDTO> {
    return this.http.get<movieTheatersDTO>(`${this.apiURL}/${id}`);
  }

  public create(movieTheaterDTO: movieTheatersCreationDTO) {
    return this.http.post(this.apiURL, movieTheaterDTO);
  }

  public edit(id: number, movieTheaterDTO: movieTheatersCreationDTO) {
    return this.http.put(`${this.apiURL}/${id}`, movieTheaterDTO);
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
