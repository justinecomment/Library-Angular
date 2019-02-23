import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  token: string;

  constructor(
    private http: HttpClient,
  ) { }

  public getBooks() {
    this.getToken();

    return this.http.get('http://192.168.1.13:8888/book/all', {
      headers: {
        authorization: this.token
      }
    });
  }

  private getToken() {
    if ( !localStorage.getItem('token')) {
     return;
    } else {
      return this.token = localStorage.getItem('token');
    }
  }
}
