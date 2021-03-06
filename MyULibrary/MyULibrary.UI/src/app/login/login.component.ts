import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../AppSettings';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private route:Router) {
      if(localStorage.getItem("token") != null && localStorage.getItem("token") != "" ){
        route.navigate(['/books'])
      }
     
   }

  

  Login()
  {
    this.http.post<any>(`${AppSettings.API_ENDPOINT}/${AppSettings.login}`,this.user).subscribe(data =>
      {
        if(data && data.isAuthenticated === true)
        {
          ;
          localStorage.setItem ('token', data.token);
          localStorage.setItem ('email', data.email);
          localStorage.setItem ('role', data.roles[0]);
          window.location.reload();
        }
      });
  }

  ngOnInit(): void {
  }

  user = {
    UserName : "",
    Password : ""
  }

}
