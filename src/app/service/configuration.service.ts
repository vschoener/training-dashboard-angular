import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigurationService {
  constructor() { }

  getApiConfig() {
    return environment.api;
  }
}
