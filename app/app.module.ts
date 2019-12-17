import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksListComponent } from './Books/books-list/books-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AuthorsListComponent } from './Author/authors-list/authors-list.component';
import { AppRoutingModule } from './app-routing.module';
import { GenresListComponent } from './Genre/genres-list/genres-list.component';
import { BooksDetailsComponent } from './Books/books-details/books-details.component';
import { BooksAddComponent } from './Books/books-add/books-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BooksUpdateComponent } from './Books/books-update/books-update.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthorsDetailsComponent } from './Author/authors-details/authors-details.component';
import { AuthorsAddComponent } from './Author/authors-add/authors-add.component';
import { GenresDetailsComponent } from './Genre/genres-details/genres-details.component';
import { AuthorsUpdateComponent } from './Author/authors-update/authors-update.component';
import { GenresAddComponent } from './Genre/genres-add/genres-add.component';
import { GenresUpdateComponent } from './Genre/genres-update/genres-update.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    NavbarComponent,
    AuthorsListComponent,
    GenresListComponent,
    BooksDetailsComponent,
    BooksAddComponent,
    BooksUpdateComponent,
    AuthorsDetailsComponent,
    AuthorsAddComponent,
    GenresDetailsComponent,
    AuthorsUpdateComponent,
    GenresAddComponent,
    GenresUpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
