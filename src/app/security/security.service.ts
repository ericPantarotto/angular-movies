import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  authenticationResponse,
  editRoleDTO,
  userCredentials,
  userDTO,
} from './security.models';
// import { StartConfigService } from '../utilities/start-config.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  private apiURL = environment.apiURL + '/accounts';
  // private apiURL = this.environment.config['apiURL'] + '/accounts';
  private readonly tokenKey: string = 'token';
  private readonly expirationTokenKey: string = 'token-expiration';
  private readonly roleField =
    'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

  constructor(
    private http: HttpClient,
    private router: Router // private environment: AppConfigService // private environment: StartConfigService
  ) {}

  getUsers(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());

    return this.http.get<userDTO[]>(`${this.apiURL}/users`, {
      observe: 'response',
      params,
    });
  }

  assignRole(userEditDTO: editRoleDTO) {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post(
      `${this.apiURL}/AssignRole`,
      JSON.stringify(userEditDTO),
      {
        headers,
      }
    );
  }

  removeRole(userEditDTO: editRoleDTO) {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post(
      `${this.apiURL}/RemoveRole`,
      JSON.stringify(userEditDTO),
      {
        headers,
      }
    );
  }

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
    return this.getFieldFromJWT(this.roleField);
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
    this.router.navigate(['/login']);
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

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
