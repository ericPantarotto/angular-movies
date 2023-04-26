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
  private readonly tokenKey: string = 'token';
  private readonly expirationTokenKey: string = 'token-expiration';
  private readonly roleField = 'role';

  constructor(
    private http: HttpClient,
    private environment: AppConfigService
  ) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);

    if (!token) {
      return false;
    }

    const expiration = localStorage.getItem(this.expirationTokenKey);
    const expirationDate = new Date(expiration!);

    if (expirationDate <= new Date()) {
      this.logout();
      return false;
    }

    return true;
  }

  getRole(): string {
    return '';
  }

  register(
    userCredentials: userCredentials
  ): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(
      this.apiURL + '/create',
      userCredentials
    );
  }

  login(userCredentials: userCredentials): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(
      this.apiURL + '/login',
      userCredentials
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey);
  }

  saveToken(authenticationResponse: authenticationResponse) {
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
    localStorage.setItem(
      this.expirationTokenKey,
      authenticationResponse.expiration.toString()
    );
  }

  getFieldFromJWT(field: string): string {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      return '';
    }
    const dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[field];
  }
}
