import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.showLogin = localStorage.getItem("token") != null && localStorage.getItem("token") != "";
  }
  title = 'My U Library';
  showLogin = true;
  UserLogged = localStorage.getItem("email");
}


