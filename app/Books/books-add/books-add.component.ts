import { Component, OnInit } from '@angular/core';
import {BookService} from '../../shared/Services/book.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Book} from '../../shared/models/Book';
import {Author} from '../../shared/models/Author';
import {AuthorService} from '../../shared/Services/author.service';
import {Router} from '@angular/router';
import {Genre} from '../../shared/models/Genre';
import {GenreService} from '../../shared/Services/genre.service';
import {BookGenre} from '../../shared/models/BookGenre';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent implements OnInit {
  private book: Book;
  authors: Author[];
  genres: Genre[];
  bookForm = new FormGroup({
    name: new FormControl(''),
    genreId: new FormControl(''),
    authorId: new FormControl('')
  });

  constructor(private bookService: BookService, private authorService: AuthorService,
              private genreService: GenreService, private router: Router) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(loA => {this.authors = loA; });
    this.genreService.getGenres().subscribe(loG => {this.genres = loG; });
  }

  addBookButton() {
    // console.log(this.bookForm.value);
    this.book = this.bookForm.value;
    const gen: BookGenre = this.bookForm.value;
    this.book.genre = [{ book: null, genreId: gen.genreId, genre: null}]; // = gen.genreId;
    // console.log(this.book)
    this.bookService.addBook(this.book).subscribe(() => {this.router.navigateByUrl('/books'); });
    // { Id: 0, Name: 'New', author: null, authorId: 0, genre: 'toBeFixed'}
    // this.bookForm.reset();
    // this.router.navigateByUrl('/books');
  }

}
