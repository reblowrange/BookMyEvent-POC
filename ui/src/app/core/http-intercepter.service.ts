import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class HttpIntercepterService implements HttpInterceptor {
  private readonly httpInterceptorHeader = new HttpHeaders(environment.httpInterceptorHeader);

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: this.httpInterceptorHeader,
      url: environment.url + req.url
    });

    // console.log('Intercepted HTTP call', authReq);
    return next.handle(authReq);
  }
}