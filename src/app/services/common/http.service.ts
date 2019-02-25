import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService implements HttpInterceptor {

  constructor(
    private http: HttpClient,
    private auth: AuthenticationService) { }

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'authorization': `${this.auth.getToken()}`
      }
    });
    return next.handle(request);
  }


  public get(url: string): any {
    return this.http.get(url);
  }

  public post(url: string, data: any): any {
    return this.http.post(url, data);
  }

  private getToken() {
    if ( !localStorage.getItem('token')) {
     return null;
    }
    return localStorage.getItem('token');
  }
}
