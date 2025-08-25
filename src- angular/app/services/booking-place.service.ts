import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookingPlace } from '../classes/bookingPlace';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingPlaceService {

  constructor(public http : HttpClient) { }
  basePath:string="https://localhost:7036/api/BookingPlace/"
  addInviteToTrip(bp:bookingPlace):Observable<number>
  {
    return this.http.post<number>(`${this.basePath}AddInviteToTrip`, bp)
  }
  deleteBookingPlace(id:Number):Observable<boolean>
  {
    return this.http.delete<boolean>(`${this.basePath}DeleteBookingPlace/${id}`)
  } 
  getAllInviteToTrip(id:Number):Observable<Array<bookingPlace>>
  {
    debugger
    return this.http.get<Array<bookingPlace>>(`${this.basePath}GetAllInviteToTrip/${id}`)
  }
  

}
