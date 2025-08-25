import { Injectable } from '@angular/core';
import { user } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { trip } from '../classes/trip';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  u:user=new user()
  manage:boolean=false
  constructor(public http : HttpClient) {}
  basePath:string="https://localhost:7036/api/User/"
  getAll():Observable<Array<user>>
  {
    return this.http.get<Array<user>>(`${this.basePath}GetAllUsers`)
  }
  getByMailAndPassword(mail:string, password:string):Observable<user>
  {
    return this.http.get<user>(`${this.basePath}GetUserByMailAndPassword/${mail}/${password}`)
  }
  addUser():Observable<number>
  {
    return this.http.post<number>(`${this.basePath}addUser`,this.u)
  }
  deleteUser(id:Number):Observable<boolean>
  {
    return this.http.delete<boolean>(`${this.basePath}DeleteUser/${id}`)
  }
  getAllTripsToUser(id:Number):Observable<Array<trip>>
  {
    return this.http.get<Array<trip>>(`${this.basePath}GetAllTripToUser/${id}`)
  }
  updateUser():Observable<boolean>
  {
    return this.http.put<boolean>(`${this.basePath}UpdateUser`, this.u)
  }
}
