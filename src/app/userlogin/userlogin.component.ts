import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  doLogin(data :any){
    console.log(data);
  }
  doSignUp(secdata :any){
    console.log(secdata);
  }

}
