import {Injectable} from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request,
  XHRBackend
} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Injectable()
export class HttpService extends Http {

  private authToken: string;

  constructor(private backend: ConnectionBackend, options: RequestOptions, private router?: Router) {
    super(backend, options);
  }


  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', 'Bearer ' + this.authToken);
    }
    else {
      url.headers.set('Authorization', 'Bearer ' + this.authToken);
    }

    return this.intercept(super.request(url, options));
  }

  get(url: string, options?: RequestOptionsArgs, skipInterceptor?: boolean): Observable<Response> {
    if (skipInterceptor) {
      return super.get(url, options);
    }
    return this.intercept(super.get(url, options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs, skipInterceptor?: boolean): Observable<Response> {
    if (skipInterceptor) {
      return super.post(url, body, options);
    }
    else {
      return this.intercept(super.post(url, body, options));
    }
  }

  saveToken(token: string) {
    this.authToken = token;
  }

  private intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((error: Response) => {
      if (error.status == 401 || error.status == 403) {
        this.router.navigate(['login']);
        console.log('authentication error: ' + error.status + ' ' + error.statusText);

      }
      return Observable.throw(error);
    });
  }

}
