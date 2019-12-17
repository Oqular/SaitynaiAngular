import { Component, OnInit } from '@angular/core';
import {Author} from '../../shared/models/Author';
import {BookService} from '../../shared/Services/book.service';
import {ActivatedRoute} from '@angular/router';
import {AuthorService} from '../../shared/Services/author.service';

@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors-details.component.css']
})
export class AuthorsDetailsComponent implements OnInit {
  author: Author;

  constructor(private authorService: AuthorService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthorById(id).subscribe(a => {this.author = a; });
  }

}
