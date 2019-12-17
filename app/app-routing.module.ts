import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from './Books/books-list/books-list.component';
import {AuthorsListComponent} from './Author/authors-list/authors-list.component';
import {GenresListComponent} from './Genre/genres-list/genres-list.component';
import {BooksDetailsComponent} from './Books/books-details/books-details.component';
import {BooksAddComponent} from './Books/books-add/books-add.component';
import {BooksUpdateComponent} from './Books/books-update/books-update.component';
import {AuthorsDetailsComponent} from './Author/authors-details/authors-details.component';
import {AuthorsAddComponent} from './Author/authors-add/authors-add.component';
import {AuthorsUpdateComponent} from './Author/authors-update/authors-update.component';
import {GenresDetailsComponent} from './Genre/genres-details/genres-details.component';
import {GenresAddComponent} from './Genre/genres-add/genres-add.component';
import {GenresUpdateComponent} from './Genre/genres-update/genres-update.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'genresupdate/:id', component: GenresUpdateComponent},
  { path: 'genresadd', component: GenresAddComponent},
  { path: 'genres/:id', component: GenresDetailsComponent},
  { path: 'genres', component: GenresListComponent},
  { path: 'authorsupdate/:id', component: AuthorsUpdateComponent},
  { path: 'authorsadd', component: AuthorsAddComponent},
  { path: 'authors/:id', component: AuthorsDetailsComponent},
  { path: 'authors', component: AuthorsListComponent},
  { path: 'booksupdate/:id', component: BooksUpdateComponent},
  { path: 'booksadd', component: BooksAddComponent},
  { path: 'books/:id', component: BooksDetailsComponent},
  { path: 'books', component: BooksListComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
