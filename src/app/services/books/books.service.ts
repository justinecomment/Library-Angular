import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { Book } from 'src/app/model/entity/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(
    private httpService: HttpService
  ) { }

  getBooks(): Observable<Array<Book>> {
    return this.httpService.get('http://192.168.1.13:8888/book/all');
  }
}
