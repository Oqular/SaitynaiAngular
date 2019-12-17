import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../../shared/Services/author.service';
import {Author} from '../../shared/models/Author';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  authors: Author[];
  showmodal: boolean;
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(loA => {this.authors = loA; });
  }

  delete(id: number) {
    console.log(id);
    this.authorService.deleteAuthor(id).subscribe(message => {console.log(message); });
    window.location.reload();
    // this.authorService.getAuthors().subscribe(loA => {this.authors = loA; }); // required
  }

}
