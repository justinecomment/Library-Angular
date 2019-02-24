import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthenticatedUser } from '../model/user/authenticated-user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(
    private http: HttpClient) {}

  signUp( dataForm: any ) {
    return this.http.post('http://192.168.1.13:8888/users/sign-up', dataForm );
  }

  signIn( dataForm: any ) {
    return this.http.post('http://192.168.1.13:8888/login',  dataForm );
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string, username: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  isAuthenticated(): boolean {
    console.log('Check for auth');
    const token = this.getToken();
    if (token === undefined) {
      console.log('Token undefined');
      return false;
    }
    if (this.isTokenExpired(token) ) {
      console.log('Token expired');
      localStorage.clear();
      return false;
    }
    return true;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date();
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    console.log('Check for expired token');
    
    if (!token) {
      console.log('No token passed as parameter');
      token = this.getToken();
    }

    if (!token) {
      console.log('No token found or provided.');
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }
}
