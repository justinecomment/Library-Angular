import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  timeLogin = 100000;

  constructor(
    private http: HttpClient,
    private router: Router) {}
  
  signUp( dataForm ) {
    return this.http.post('http://192.168.1.13:8888/users/sign-up', dataForm );
  }

  signIn( dataForm ) {
    return this.http.post('http://192.168.1.13:8888/login',  dataForm )
      .subscribe( response => {
        console.log(response);
        this.saveToken(response.token);
        this.router.navigate(['']);
      },
      error => {
        console.log('MY ERROR : ', error);
      });
  }

  logOut() {
    localStorage.removeItem('token');
  }

  saveToken(token: string): any {
    if (token) {
      localStorage.setItem('token', token);
      setTimeout(() => {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
      }, this.timeLogin);
    } else {
      throw new Error('token is missing');
    }
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
