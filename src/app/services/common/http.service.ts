import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';



@Injectable({
  providedIn: 'root'
})

export class HttpService {


  authorizationConfigured: string = null;
  constructor(private http: HttpClient,
    private auth: AuthenticationService) {
    this.authorizationConfigured = this.getToken();
   }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': this.authorizationConfigured
    })
  }

  // TODO : use http interceptor

  public get(url: string): any {
    return this.http.get(url);
  }

  public post(url: string, data: any): any {
    return this.http.post(url, data, this.httpOptions);
  }

  private getToken() {
    if ( !localStorage.getItem('token')) {
     return null;
    }
    return localStorage.getItem('token');
  }
}
