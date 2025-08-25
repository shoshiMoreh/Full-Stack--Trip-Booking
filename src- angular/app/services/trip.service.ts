import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { trip } from '../classes/trip';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  chooseTrip:trip=new trip()
  constructor(public http : HttpClient) { }
  basePath:string="https://localhost:7036/api/Trip/"
  getAll():Observable<Array<trip>>
  {
    return this.http.get<Array<trip>>(`${this.basePath}GetAllTrips`)
  }
  getById(id:number):Observable<trip>
  {
    return this.http.get<trip>(`${this.basePath}GetTripById/${id}`)
  }
}
