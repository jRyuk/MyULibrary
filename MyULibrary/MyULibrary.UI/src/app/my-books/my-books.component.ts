import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../AppSettings';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router) { }
  books:any;
  ngOnInit(): void 
  {
    this.LoadBooks();
  }

  LoadBooks(){
    const head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`, 
      
    })

    this.http.get(`${AppSettings.API_ENDPOINT}/${AppSettings.myBooks}`
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
