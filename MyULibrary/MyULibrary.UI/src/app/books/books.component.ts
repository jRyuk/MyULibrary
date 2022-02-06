import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppSettings } from '../AppSettings';
import * as moment from 'moment';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void 
  {
    this.http.get(`${AppSettings.API_ENDPOINT}/${AppSettings.getBooks}`).subscribe(result=> {
      this.books = result;
    });
  }

}
