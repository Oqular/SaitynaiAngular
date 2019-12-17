import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthorService} from '../../shared/Services/author.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GenreService} from '../../shared/Services/genre.service';

@Component({
  selector: 'app-genres-update',
  templateUrl: './genres-update.component.html',
  styleUrls: ['./genres-update.component.css']
})
export class GenresUpdateComponent implements OnInit {
  genreForm = new FormGroup({
    name: new FormControl('')
  });
  id: number;
  constructor(private genreService: GenreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.genreService.getGenreById(this.id).subscribe(g => {this.genreForm.setValue({name: g.name}); });
  }

  updateGenreButton() {
    const genre = this.genreForm.value;
    genre.id = this.id;
    this.genreService.updateGenre(genre).subscribe(() => {this.router.navigateByUrl('/genres'); });
  }

}
