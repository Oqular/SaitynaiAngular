import { Component, OnInit } from '@angular/core';
import {Genre} from '../../shared/models/Genre';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthorService} from '../../shared/Services/author.service';
import {Router} from '@angular/router';
import {GenreService} from '../../shared/Services/genre.service';

@Component({
  selector: 'app-genres-add',
  templateUrl: './genres-add.component.html',
  styleUrls: ['./genres-add.component.css']
})
export class GenresAddComponent implements OnInit {
  private genre: Genre;
  genreForm = new FormGroup({
    name: new FormControl('')
  });
  constructor(private genreService: GenreService, private router: Router) { }

  ngOnInit() {
  }

  addGenreButton() {
    this.genre = this.genreForm.value;
    this.genreService.addGenre(this.genre).subscribe(() => {this.router.navigateByUrl('/genres'); });
  }
}
