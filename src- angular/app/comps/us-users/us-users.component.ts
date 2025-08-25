import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-us-users',
  templateUrl: './us-users.component.html',
  styleUrls: ['./us-users.component.css']
})
export class UsUsersComponent implements OnInit{
  constructor(public userS:UserService){}
  ngOnInit(): void {
    this.userS.getAll().subscribe(
      succ=>{this.LUsers=succ},
      err=>{alert("problem!!!!")}
    )
  }
  LUsers:Array<user>=new Array<user>()

}
