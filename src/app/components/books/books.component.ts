import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from 'src/app/services/books/books.service';
import { Book } from 'src/app/model/entity/book';
import {MatSort, MatTableDataSource, MatPaginator, MatDialog} from '@angular/material';
import { AddBookComponent } from 'src/app/components/add-book/add-book.component';

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
  animal: string;
  name: string;

  constructor(
    private booksService: BooksService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  addBook() {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log(dialogRef.componentInstance.addBookForm.value);
    });
  }

  getBooks() {
    this.booksService.get().subscribe(
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
