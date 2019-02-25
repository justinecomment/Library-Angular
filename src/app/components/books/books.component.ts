import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books/books.service';
import { Book } from 'src/app/model/entity/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Array<Book>;

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  addBook() {
    console.log('ajouter un livre');
  }

  getBooks() {
    this.booksService.getBooks().subscribe(
      response => {
        if (response !== null) {
          this.books = response;
        }
        console.log(this.books);
      },
      error => {
        console.log('ERREUR: ', error);
      }
    );
  }

}
