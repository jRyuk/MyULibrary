import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../AppSettings';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css']
})
export class CreateusersComponent implements OnInit {

  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
  }

  user =
   {
    FirstName : "",
    LastName : "",
    Email : "",
    Password : "",
    ConfirmPassword : "", 
    Role : "",
  }

  Guardar()
  {
    const head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`, 
      
    })

    this.http.post<any>(`${AppSettings.API_ENDPOINT}/${AppSettings.user}`,this.user, {headers:head}).subscribe(data =>
      {
       this.route.navigate(['/users']);
      });
  }

}
