import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userCredentials } from '../security.models';
import { SecurityService } from '../security.service';
import { parseWebAPIErrors } from 'src/app/utilities/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  errors: string[] = [];

  constructor(
    private securityService: SecurityService,
    private router: Router
  ) { }

  register(userCredentials: userCredentials) {
    this.errors = [];
    this.securityService.register(userCredentials).subscribe({
      next: (authenticationResponse) => console.log(authenticationResponse),
      error: (e) => this.errors = parseWebAPIErrors(e)
    });
  }
}
  //   this.securityService.saveToken(authenticationResponse);
  //   this.router.navigate(['/']);