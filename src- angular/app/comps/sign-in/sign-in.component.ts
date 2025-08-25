import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trip } from 'src/app/classes/trip';
import { user } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{
  constructor(public userS:UserService, public r:Router){}
  mail:string=""
  password:string=""
 
  getByMailPassword()
  {
    if(localStorage.getItem("מייל") == this.mail && localStorage.getItem("סיסמא") == this.password)
    {
      this.userS.manage=true
      this.userS.u=new user()
      this.r.navigate([`/ourTrips`])
    }
    else
    {
        this.userS.getByMailAndPassword(this.mail, this.password).subscribe(
        succ=>
        {this.userS.u=succ
          if(this.userS.u.UserCode!=0)
          {
            this.userS.manage=false
            this.r.navigate([`/ourTrips`])
          }
          else
          {
            alert("אינך קיים במערכת")
          }
        },
        err=>{alert("שגיאה")}
      )
    }
      
    
  }
  
}
