import { Injectable } from '@angular/core';
import { ConfigurationService } from '../service/configuration.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { Channel } from '../model/channel';

// Import Rxjs Method
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiClientService {
  constructor(private config: ConfigurationService, private http: HttpClient) { }

  getUrl(): string {
    const apiConfig = this.config.getApiConfig();

    return `${apiConfig.server}:${apiConfig.port}` + (apiConfig.version.length ? '/' + apiConfig.version : '');
  }

  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.getUrl() + '/channels')
      .pipe(
        tap(data => console.log('Channels', data)),
        catchError(this.handleError('getChannels', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
