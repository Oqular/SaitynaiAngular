import { Injectable } from '@angular/core';
import {Genre} from '../models/Genre';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author} from '../models/Author';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  genres: Genre[];
  apiUrl = 'https://localhost:44326/api/genres';
  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.apiUrl);
  }

  getGenreById(id: number): Observable<Genre> {
    return this.http.get<Genre>(this.apiUrl + '/' + id);
  }

  deleteGenre(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  addGenre(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.apiUrl, genre);
  }

  updateGenre(genre: Genre): Observable<Genre> {
    return this.http.put<Genre>(this.apiUrl + '/' + genre.id, genre);
  }
}
