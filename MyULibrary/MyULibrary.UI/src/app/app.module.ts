import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import {FormsModule} from '@angular/forms';
import { CreateusersComponent } from './createusers/createusers.component';
import { LoginComponent } from './login/login.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { UsersComponent } from './users/users.component';

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
    path : 'createusers', 
    component : CreateusersComponent
  },
  {
    path : 'users', 
    component : UsersComponent
  },
  {
    path : "mybooks",
    component : MyBooksComponent
  }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes),HttpClientModule,FormsModule ],
  declarations: [ CreateusersComponent, AppComponent, CreateBooksComponent, BooksComponent, CreateusersComponent, LoginComponent, MyBooksComponent, UsersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }