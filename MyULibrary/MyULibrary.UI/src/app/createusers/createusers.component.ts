import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css']
})
export class CreateusersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user = {
    FirstName : "",
    LastName : "",
    Email : "",
    Password : "",
    ConfirmPassword : "", 
    Role : "",
  }

  Guardar(){
    
  }

}
