import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public r:Router){}
  ngOnInit(): void {
    this.r.navigate([`./about`])
    if(localStorage.getItem("מייל")==null)
    {
      localStorage.setItem("מייל","manage@gmail.com")
      localStorage.setItem("סיסמא","  ")
    }
    }
  title = 'shoshi_projectAngular';
}
