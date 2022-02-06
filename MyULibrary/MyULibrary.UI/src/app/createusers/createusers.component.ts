import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../AppSettings';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css']
})
export class CreateusersComponent implements OnInit {

  constructor(private http:HttpClient) { }

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
    this.http.post<any>(`${AppSettings.API_ENDPOINT}/${AppSettings.user}`,this.user).subscribe(data =>
      {
       
      });
  }

}
