import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../AppSettings';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void
   {
    this.LoadBooks();
   }
   books: any;

   EndBooking(bookingId:any)
   {
    const head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`, 
      
    })

    this.http.get(`${AppSettings.API_ENDPOINT}/${AppSettings.endbooking}/${bookingId}`
    , {observe: 'response', headers:head}).
    subscribe(
      (response)=>
       {
         this.LoadBooks();
        },
        (error)=> {
          if(error.status === 401){
            localStorage.clear();
            this.route.navigate(['/']); 
          }
        }
    );
   }

   LoadBooks()
   {
    const head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`, 
      
    })

    this.http.get(`${AppSettings.API_ENDPOINT}/${AppSettings.getAllrequestedtbook}`
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
