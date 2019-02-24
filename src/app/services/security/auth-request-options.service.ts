import { Headers, Http, BaseRequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

const AUTH_HEADER_KEY = 'authorization';


@Injectable()
export class AuthRequestOptionsService extends BaseRequestOptions {

  constructor(  ) {
    super();

    const token = localStorage.getItem('token');
    if (token) {
      this.headers.append(AUTH_HEADER_KEY, `${token}`);
    }
   }
}
