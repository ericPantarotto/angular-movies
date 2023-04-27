import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StartConfigService {
  private appConfig: any;

  constructor(private injector: Injector) {}

  loadAppConfig() {
    let http = this.injector.get(HttpClient);

    return firstValueFrom(http.get('/assets/app-config.json')).then((data) => {
      this.appConfig = data;
    });
  }

  get config() {
    return this.appConfig;
  }
}
