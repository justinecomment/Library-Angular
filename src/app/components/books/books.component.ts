import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from 'src/app/services/books/books.service';
import { Book } from 'src/app/model/entity/book';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  displayedColumns: string[] = ['isbn', 'title', 'alternateTitle', 'year', 'author', 'category', 'style'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
      (response: Array<Book>) => {
        if (response !== null) {
          this.dataSource = new MatTableDataSource(response);
          this.dataSource.paginator = this.paginator;
        }
        console.log(this.dataSource.data);
      },
      error => {
        console.log('ERREUR: ', error);
      }
    );
  }
}
