import {Author} from './Author';
import {BookGenre} from './BookGenre';

export class Book {
  id: number;
  name: string;
  genre: BookGenre[]; // book_genre type
  authorId: number;
  author: Author;
}
