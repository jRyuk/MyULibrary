import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
     path: 'createbook', 
     component: CreateBooksComponent 
  },
  {
    path : 'books',
    component : BooksComponent
  },
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes),HttpClientModule,FormsModule ],
  declarations: [ AppComponent, CreateBooksComponent, BooksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }