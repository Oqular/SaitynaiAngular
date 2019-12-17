import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../shared/Services/book.service';
import {AuthorService} from '../../shared/Services/author.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Author} from '../../shared/models/Author';

@Component({
  selector: 'app-authors-update',
  templateUrl: './authors-update.component.html',
  styleUrls: ['./authors-update.component.css']
})
export class AuthorsUpdateComponent implements OnInit {
  authorForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl('')
  });
  id: number;
  constructor(private authorService: AuthorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthorById(this.id).subscribe(a => { this.authorForm.setValue({name: a.name, surname: a.surname}); });

  }

  updateAuthorButton() {
    const author = this.authorForm.value;
    author.id = this.id;
    this.authorService.updateAuthor(author).subscribe(() => {this.router.navigateByUrl('/authors'); });
    // { Id: 0, Name: 'New', author: null, authorId: 0, genre: 'toBeFixed'}
    // this.bookForm.reset();

  }

}
