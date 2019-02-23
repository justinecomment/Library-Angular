import { BookStyle } from "src/app/model/entity/book-style";
import { BookCategory } from "src/app/model/entity/book-category";
import { Author } from "src/app/model/entity/author";

export interface Book {
  id: number,
  isbn: string,
  styles: Array<BookStyle>,
  title: string,
  year: number,
  category: BookCategory,
  author: Author,
  alternateTitle: string
}