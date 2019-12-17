import { Component, OnInit } from '@angular/core';
import {Genre} from '../../shared/models/Genre';
import {AuthorService} from '../../shared/Services/author.service';
import {ActivatedRoute} from '@angular/router';
import {GenreService} from '../../shared/Services/genre.service';

@Component({
  selector: 'app-genres-details',
  templateUrl: './genres-details.component.html',
  styleUrls: ['./genres-details.component.css']
})
export class GenresDetailsComponent implements OnInit {
  genre: Genre;
  constructor(private genreService: GenreService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.genreService.getGenreById(id).subscribe(g => {this.genre = g; });
  }

}
