import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../AppSettings';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  Guardar()
  {
    this.http.post<any>(`${AppSettings.API_ENDPOINT}/${AppSettings.getBooks}`,this.book).subscribe(data =>
     {
      
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
