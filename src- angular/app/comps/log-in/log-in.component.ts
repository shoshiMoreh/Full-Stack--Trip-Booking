import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trip } from 'src/app/classes/trip';
import { user } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{
  constructor(public userS:UserService, public r:Router){}
  upd:boolean=false
  ngOnInit(): void {
    if(this.r.url=='/updateDetails')
    {
      this.upd=true
      this.userS.u={...this.userS.u}
    }
  }
  success:number=0
  bool:boolean=false
  LTuser:Array<trip>=new Array<trip>
  addUser()
  {
    if(!this.upd)
    {
      this.userS.addUser().subscribe(
      succ=>{this.success=succ
        this.r.navigate([`signIn`])
      },
      err=>{}
    )
    }
    else
    {
      this.userS.updateUser().subscribe(
        succ=>{alert("השינויים התעדכנו")},
        err=>{}
      )
    }
    
  }
  deleteUser()
  {
    this.userS.getAllTripsToUser(this.userS.u.UserCode).subscribe(
      succ=>{this.LTuser=succ},
      err=>{alert("בעיה")}
    )
    var list=this.LTuser.find(x=> x.Date! > new Date())
    if(!list)
    {
      this.userS.deleteUser(this.userS.u.UserCode).subscribe(
      succ=>{this.bool=succ
      this.userS.u=new user()},
      err=>{alert("err")}
      )
    }  
    else
    {
      alert("יש לך עדיין הזמנות לעתיד....")
    }
  }
}
