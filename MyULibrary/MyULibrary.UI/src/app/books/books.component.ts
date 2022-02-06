import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
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
    const head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })

    this.http.get(`${AppSettings.API_ENDPOINT}/${AppSettings.getBooks}`,{headers:head}).subscribe(result=> {
      this.books = result;
    });
  }

}
