import { Component, OnInit } from '@angular/core';
import {Book} from '../../shared/models/Book';
import {BookService} from '../../shared/Services/book.service';
import {debuglog} from 'util';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[];
  showmodal: boolean;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(loB => {this.books = loB; });
    console.log(this.books);
  }

  delete(id: number) {
    this.bookService.deleteBook(id).subscribe(message => {console.log(message); });
    window.location.reload();
    // this.bookService.deleteBook(id);
    // this.books = this.bookService.getBooks(); required
  }

}
