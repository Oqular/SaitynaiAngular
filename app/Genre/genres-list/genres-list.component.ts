import { Component, OnInit } from '@angular/core';
import {Genre} from '../../shared/models/Genre';
import {GenreService} from '../../shared/Services/genre.service';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {
  genres: Genre[];
  showmodal: boolean;
  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getGenres().subscribe(loG => {this.genres = loG; });
  }

  delete(id: number) {
    this.genreService.deleteGenre(id).subscribe(message => {console.log(message); });
    window.location.reload();
   }

}
