import { Component, Input } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-authorize-view',
  templateUrl: './authorize-view.component.html',
  styleUrls: ['./authorize-view.component.css'],
})
export class AuthorizeViewComponent {
  constructor(private securityService: SecurityService) {}

  @Input()
  role?: string;

  public isAuthorized(): boolean {
    if (this.role) {
      // return this.securityService.getRole() === this.role;
      return this.securityService.getRole().includes(this.role);
    } else {
      return this.securityService.isAuthenticated();
    }
  }
}
