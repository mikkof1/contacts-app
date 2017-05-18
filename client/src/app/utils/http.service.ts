import {Injectable} from '@angular/core';
import {Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Headers, Request} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService extends Http {

  private authToken: string;

  constructor(private backend: ConnectionBackend, private options: RequestOptions) {
    super(backend, options);
  }


  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', 'Bearer ${token}');
    }
    else {
      url.headers.set('Authorization', 'Bearer ${token}');
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
    return this.intercept(super.post(url, body, options));
  }

  saveToken(token: string) {
    this.authToken = token;
  }

  private intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((error: Response) => {
      if (error.status == 401) {
        console.log(error.status + ' ' + error.statusText);
      }
      return Observable.throw(error);
    });
  }

}
