import { Component, OnInit } from '@angular/core';
import {BookService} from '../../shared/Services/book.service';
import {AuthorService} from '../../shared/Services/author.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../shared/models/Book';
import {Author} from '../../shared/models/Author';
import {FormControl, FormGroup} from '@angular/forms';
import {Genre} from '../../shared/models/Genre';
import {GenreService} from '../../shared/Services/genre.service';

@Component({
  selector: 'app-books-update',
  templateUrl: './books-update.component.html',
  styleUrls: ['./books-update.component.css']
})
export class BooksUpdateComponent implements OnInit {
  authors: Author[];
  genres: Genre[];
  bookForm = new FormGroup({
    name: new FormControl(''),
    genreId: new FormControl(''),
    authorId: new FormControl('')
  });
  id: number;

  constructor(private bookService: BookService, private authorService: AuthorService,
              private genreService: GenreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.authors = this.authorService.getAuthors();
    // this.id = +this.route.snapshot.paramMap.get('id');
    // const book = this.bookService.getBookById(this.id);
    // this.bookForm.setValue({Name: book.Name, genre: book.genre, authorId: book.authorId});
    this.authorService.getAuthors().subscribe(loA => {this.authors = loA; });
    this.genreService.getGenres().subscribe(loG => {this.genres = loG; });
    this.id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(this.id).subscribe(b => { this.bookForm.setValue({name: b.name,
      genreId: b.genre[0].genreId, authorId: b.authorId}); });
  }

  updateBookButton() {
    const book = this.bookForm.value;
    book.id = this.id;
    this.bookService.updateBook(book).subscribe(() => {this.router.navigateByUrl('/books'); });
    // { Id: 0, Name: 'New', author: null, authorId: 0, genre: 'toBeFixed'}
    // this.bookForm.reset();
    // this.router.navigateByUrl('/books');
  }

}
