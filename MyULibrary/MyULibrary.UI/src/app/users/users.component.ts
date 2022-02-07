import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../AppSettings';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router) { }

  Users:any;

  ngOnInit(): void {
    this.LoadUsers();
  }


  LoadUsers()
  {
    const head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`, 
      
    })

    this.http.get(`${AppSettings.API_ENDPOINT}/${AppSettings.users}`
    , {observe: 'response', headers:head}).
    subscribe(
      (response)=>
       {
         this.Users = response.body;
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
