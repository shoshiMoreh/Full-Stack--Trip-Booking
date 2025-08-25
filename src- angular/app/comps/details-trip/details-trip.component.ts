import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { bookingPlace } from 'src/app/classes/bookingPlace';
import { BookingPlaceService } from 'src/app/services/booking-place.service';
import { TripService } from 'src/app/services/trip.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details-trip',
  templateUrl: './details-trip.component.html',
  styleUrls: ['./details-trip.component.css']
})
export class DetailsTripComponent{
  constructor(public tripS:TripService, public bookingPS:BookingPlaceService, public userS:UserService, public r:Router){}
  f:boolean=false
  n:Number=0
  success:number=0
  nBookingP:bookingPlace=new bookingPlace()
  imgL:Array<string>=new Array<string>("../../../assets/pic/out/כינרת.jpeg", "../../../assets/pic/out/לונה פארק.jpg","../../../assets/pic/out/בניאס.jpg", "../../../assets/pic/out/חצבאני.jpg", "../../../assets/pic/out/יער בן שמן.jpg", "../../../assets/pic/out/עין גדי.jpg","../../../assets/pic/out/יער ירושלים.jpg")
  lb:Array<string>=new Array<string>("../../../assets/pic/בניאס/בניאס.jpg","../../../assets/pic/בניאס2/בניאס.jpeg","../../../assets/pic/בניאס3/בניאס.jpg","../../../assets/pic/בניאס4/בניאס.jpg")
  lch:Array<string>=new Array<string>("../../../assets/pic/חצבאני/חצבאני.jpg","../../../assets/pic/חצבאני2/חצבאני.jpg","../../../assets/pic/חצבאני3/חצבאני.JPG","../../../assets/pic/חצבאני4/חצבאני.jpg")
  i:number=0
  invateP()
  {
    debugger
    this.f=true
  }
  closeInvateP()
  {
    this.f=false
  }
  checkInviteP()
  {
    if(this.userS.u.UserCode==0)
      this.r.navigate([`signIn`])
     
    else if(this.tripS.chooseTrip.NumberOfAvailablePlaces>=this.n)
    {
      this.addInvite()
      if(this.success>0)
        alert("ההזמנה בוצעה!!")
      this.f=false
    }
    else
      alert("אין מספיק מקום!!!")  
  }
  addInvite()
  {
    this.nBookingP.UserCode=this.userS.u.UserCode
    this.nBookingP.BookingDate=new Date()
    this.nBookingP.TripCode=this.tripS.chooseTrip.TripCode
    this.nBookingP.NumberOfPlaces=this.n
    this.nBookingP.FullName=this.userS.u.Name+" "+this.userS.u.Family
    this.nBookingP.TripDestination=this.tripS.chooseTrip.TripDestination
    this.nBookingP.Date=this.tripS.chooseTrip.Date
    this.bookingPS.addInviteToTrip(this.nBookingP).subscribe(
      succ=>{this.success=succ
      alert("ההזמנה בוצעה בהצלחה!!")},
      err=>{alert("ההזמנה נכשלה")}
    )
  }
  nextPhoto() {
    if(this.i<(this.imgL.length-2))
      this.i+=1
  }
  previousPhoto() {
    if(this.i>0)
       this.i-=1
  }
}
