import { Component, OnInit } from '@angular/core';
import {Author} from '../../shared/models/Author';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthorService} from '../../shared/Services/author.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authors-add',
  templateUrl: './authors-add.component.html',
  styleUrls: ['./authors-add.component.css']
})
export class AuthorsAddComponent implements OnInit {
 private author: Author;
 authorForm = new FormGroup({
   name: new FormControl(''),
   surname: new FormControl('')
 });
  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
  }

  addAuthorButton() {
    this.author = this.authorForm.value;
    this.authorService.addAuthor(this.author).subscribe(() => {this.router.navigateByUrl('/authors'); });
  }

}
