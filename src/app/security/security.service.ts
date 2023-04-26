import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../utilities/app-config.service';
import { authenticationResponse, userCredentials } from './security.models';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  private apiURL = this.environment.config['apiURL'] + '/accounts';

  constructor(
    private http: HttpClient,
    private environment: AppConfigService
  ) {}

  isAuthenticated(): boolean {
    return false;
  }

  getRole(): string {
    return 'admin';
  }

  register(
    userCredentials: userCredentials
  ): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(
      this.apiURL + '/create',
      userCredentials
    );
  }
}
