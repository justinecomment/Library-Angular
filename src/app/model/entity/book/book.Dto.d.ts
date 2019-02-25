import { BookStyle } from "../book-style";

export interface BookDto {
  isbn: string,
  title: string,
  alternateTitle: string,
  year: number,
  categoryId: number,
  authorId: number,
  styleIds: Array<number>
}