import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { travelType } from 'src/app/classes/travelType';
import { trip } from 'src/app/classes/trip';
import { TravelTypeService } from 'src/app/services/travel-type.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-our-trips',
  templateUrl: './our-trips.component.html',
  styleUrls: ['./our-trips.component.css']
})
export class OurTripsComponent implements OnInit{
  constructor(public tripS:TripService, public r:Router, public traTS:TravelTypeService){}
  lTrip:Array<trip>=new Array<trip>()
  LFTrip:Array<trip>=new Array<trip>()
  LTravelT:Array<travelType>=new Array<travelType>()
  ngOnInit(): void {
    this.tripS.getAll().subscribe(
      succ=>{
        this.lTrip=succ
        this.lTrip=this.lTrip.filter(x=> new Date(x.Date!)>new Date())
        this.LFTrip=this.lTrip
      },
      err=>{
        alert("mistake!!!")
      }
    )
    this.traTS.getAllTavelType().subscribe(
      succ=>{this.LTravelT=succ},
      err=>{alert("problem!!!!")}
    )
  }
  filterL(type:string)
  {
    if(type!="הכל")
      this.LFTrip=this.lTrip.filter(x=> x.TypeName==type)
    else
      this.LFTrip=this.lTrip
  }
  moreDetails(t:trip)
  {
    this.tripS.chooseTrip=t
    this.r.navigate([`/detailsTrip`])
  }
}
