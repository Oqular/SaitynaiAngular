import { Component, OnInit } from '@angular/core';
import {BookService} from '../../shared/Services/book.service';
import {Book} from '../../shared/models/Book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(b => {this.book = b; });
    // this.book = this.bookService.getBookById(id);
  }

}
