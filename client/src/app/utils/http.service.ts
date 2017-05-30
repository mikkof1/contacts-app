import {Injectable} from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request
} from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class HttpService extends Http {

  private authToken: string;
  private authHeader: string = 'Authorization';
  private authBearer: string = 'Bearer ';
  private loggedIn: boolean;

  constructor(private backend: ConnectionBackend, options: RequestOptions) {
    super(backend, options);
  }


  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = {headers: new Headers()};
      }
      options.headers.set(this.authHeader, this.authBearer + this.authToken);
    }
    else {
      url.headers.set(this.authHeader, this.authBearer + this.authToken);
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
    this.loggedIn = true;
    this.authToken = token;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  signOut() {
    this.loggedIn = false;
    this.authToken = '';
  }

  private intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((error: Response) => {
      if (error.status == 401 || error.status == 403) {
        this.loggedIn = false;
        console.log('Authentication error: ' + error.status + ' ' + error.statusText);
      }
      return Observable.throw(error);
    });
  }

}
