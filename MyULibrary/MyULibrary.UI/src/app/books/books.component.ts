import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AppSettings } from '../AppSettings';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: any;

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void 
  {
    this.LoadBooks();
  }

  Book(bookId: any)
  {
    const head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`, 
      
    })

    this.http.post<any>(`${AppSettings.API_ENDPOINT}/${AppSettings.requestbook}`,
    { Id : bookId},{headers:head})
    .subscribe(data =>
      {
        this.LoadBooks();
      });
    }

  LoadBooks(){
    const head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`, 
      
    })

    this.http.get(`${AppSettings.API_ENDPOINT}/${AppSettings.getBooks}`
    , {observe: 'response', headers:head}).
    subscribe(
      (response)=>
       {
         this.books = response.body;
        },
        (error)=> {
          if(error.status === 401){
            localStorage.clear();
            this.route.navigate(['/']); 
          }
        }
    );
  }
}
