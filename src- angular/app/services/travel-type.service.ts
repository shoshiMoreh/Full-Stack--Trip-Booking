import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { travelType } from '../classes/travelType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelTypeService {

  constructor(public http : HttpClient) { }
  travelT:travelType=new travelType()
  basePath:string="https://localhost:7036/api/TravelType/"
  getAllTavelType():Observable<Array<travelType>>
  {
    return this.http.get<Array<travelType>>(`${this.basePath}GetAllTavelType`)
  }
}
