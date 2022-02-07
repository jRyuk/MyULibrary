import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../AppSettings';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }

  Guardar()
  {
    const head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`, 
      
    })

    this.http.post<any>(`${AppSettings.API_ENDPOINT}/${AppSettings.postBooks}`,this.book, {headers:head}).subscribe(data =>
     {
        this.route.navigate(['/books']);
     });

  }

  book = {
    Id :0,
    Quantity: 0,
    Title : "",
    Author : "",
    Published : "",
    Genre : ""
  }

}
