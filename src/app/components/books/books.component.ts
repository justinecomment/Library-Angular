import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  cars1: [];
  cols: any[];
  books: [];

  constructor( 
    private booksService : BooksService
  ) {
    this.cols = [
      { field: 'title', header: 'Titre' },
      { field: 'category', header: 'Categorie' },
      { field: 'author', header: 'Auteur' },
      { field: 'style', header: 'Style' }
    ];
   }

  ngOnInit() {
    this.getBooks();
  }

  addBook() {
    console.log('ajouter un livre');
  }

  getBooks(){
    this.booksService.getBooks()
    .subscribe(
      response => {
        this.books = response;
        console.log(this.books);
      },
      error => {
        console.log('ERREUR: ', error)
      }
    )
  }

}
