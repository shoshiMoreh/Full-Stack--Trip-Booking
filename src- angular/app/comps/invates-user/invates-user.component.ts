import { Component, OnInit } from '@angular/core';
import { bookingPlace } from 'src/app/classes/bookingPlace';
import { trip } from 'src/app/classes/trip';
import { BookingPlaceService } from 'src/app/services/booking-place.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-invates-user',
  templateUrl: './invates-user.component.html',
  styleUrls: ['./invates-user.component.css']
})
export class InvatesUserComponent implements OnInit{
  constructor(public bpS:BookingPlaceService, public userS:UserService){}
  ngOnInit(): void {
    if(this.userS.u)
    {
      debugger
      this.userS.getAllTripsToUser(this.userS.u.UserCode).subscribe(
      succ=>{
        debugger;
        this.Lbp=succ
        this.FLbp=succ
      },
      err=>{alert("נכשל")}
    )
    }
    
  }
  Lbp:Array<trip>=new Array<trip>()
  FLbp:Array<trip>=new Array<trip>()
  d:Date=new Date()
  deleteBP(id:Number)
  {
    this.bpS.deleteBookingPlace(id).subscribe(
      succ=>{
        this.userS.getAllTripsToUser(this.userS.u.UserCode).subscribe(
                  succ=>{this.Lbp=succ
          this.FLbp=succ 
        },
        err=>{alert("!!נכשל")}
      )
    },
      err=>{alert("המחיקה נכשלה")}
    )
  }
  filterDate(str:string)
  {
    if(str=="עבר")
      this.FLbp=this.Lbp.filter(x=>new Date(x.Date!)<this.d)
    else
      this.FLbp=this.Lbp.filter(x=> new Date(x.Date!)>this.d)
  }
}
