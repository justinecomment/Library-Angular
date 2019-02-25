import { BookStyle } from "./book-style";

export interface BookDto {
  id: number;
  isbn: String;
  title: String
  alternateTitle: String;
  year: number;
  categoryId: number;
  authorId: number;
  styleIds: Array<BookStyle>
}