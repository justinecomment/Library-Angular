import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { Book } from 'src/app/model/entity/book';
import { Observable } from 'rxjs';
import { BookDto } from 'src/app/model/entity/book/book.Dto';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(
    private httpService: HttpService
  ) { }

  get(): Observable<Array<Book>> {
    return this.httpService.get('http://192.168.1.13:8888/book/all');
  }

  add(data: BookDto) {
    console.log('Book to add : ', data);

    return this.httpService.post('http://192.168.1.13:8888/book/add', data);
  }
}
