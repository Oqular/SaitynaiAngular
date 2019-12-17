import { Injectable } from '@angular/core';
import {Author} from '../models/Author';
import {Book} from '../models/Book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
 authors: Author[];
 apiUrl = 'https://localhost:44326/api/authors';
 //  apiUrl = 'https://localhost:5001/api/authors';

  constructor(private http: HttpClient) {
    // this.authors = [
    //   { Id: 1, Name: 'Jhon', Surname: 'Jhonatan', books: null},
    //   { Id: 2, Name: 'Bill', Surname: 'Billard', books: null}
    // ];
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl);
  }

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(this.apiUrl + '/' + id);
    // return this.authors.find(a => a.id === id);
    // return this.books[1];
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  addAuthor(auth: Author): Observable<Author> {
    return this.http.post<Author>(this.apiUrl, auth);
  }

  updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(this.apiUrl + '/' + author.id, author);
  }
}
