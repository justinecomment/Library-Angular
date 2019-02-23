import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthenticatedUser } from '../model/user/authenticated-user';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  timeLogin = 100000;

  constructor(
    private http: HttpClient) {}

  signUp( dataForm ) {
    return this.http.post('http://192.168.1.13:8888/users/sign-up', dataForm );
  }

  signIn( dataForm ) {
    return this.http.post('http://192.168.1.13:8888/login',  dataForm );
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  saveToken(token: string) {
    if (token) {
      localStorage.setItem('token', token);
      setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload();
      }, this.timeLogin);
    } else {
      throw new Error('You are not logged !');
    }
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
