import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppConfigService {
  private appConfig: any;

  constructor(private injector: Injector) {}

  loadAppConfig() {
    let http = this.injector.get(HttpClient);

    //NOTE: https://rxjs.dev/deprecations/to-promise
    // return http
    //   .get('/assets/app-config.json')
    //   .toPromise()
    //   .then((data) => {
    //     this.appConfig = data;
    //   });

    return firstValueFrom(http.get('/assets/app-config.json')).then((data) => {
      this.appConfig = data;
    });
  }

  get config() {
    return this.appConfig;
  }
}
