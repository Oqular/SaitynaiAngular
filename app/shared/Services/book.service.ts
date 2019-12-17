import { Injectable } from '@angular/core';
import {Book} from '../models/Book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author} from '../models/Author';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[];
  apiUrl = 'https://localhost:44326/api/books';

  constructor(private http: HttpClient) {
    // this.books = [{ Id: 1, Name: 'Alchemy', authorId: 1},
    //   { Id: 2, Name: 'New World', authorId: 1}];
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
    // return this.books;
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + '/' + id);
    // return this.books[1];
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
    // this.books = this.books.filter(b => b.Id !== id);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
    // this.books.push(book);
  }

  updateBook(book: Book): Observable<Book> {
    // const bookToUpdate = this.getBookById(book.id);
    // const index = this.books.indexOf(bookToUpdate);
    // this.books[index] = book;
    console.log(book.id);
    return this.http.put<Book>(this.apiUrl + '/' + book.id, book);
  }
}
