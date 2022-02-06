import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import {FormsModule} from '@angular/forms';
import { CreateusersComponent } from './createusers/createusers.component';

const routes: Routes = [
  {
     path: 'createbook', 
     component: CreateBooksComponent 
  },
  {
    path : 'books',
    component : BooksComponent
  },
  {
    path : 'users', 
    component : CreateusersComponent
  }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes),HttpClientModule,FormsModule ],
  declarations: [ CreateusersComponent, AppComponent, CreateBooksComponent, BooksComponent, CreateusersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }