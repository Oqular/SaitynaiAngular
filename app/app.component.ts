import { Component } from '@angular/core';
import {typeIsOrHasBaseType} from 'tslint/lib/language/typeUtils';
import {Book} from './shared/models/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookUi';
}
