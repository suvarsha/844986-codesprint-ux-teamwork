import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Fitness } from './fitness';

@Injectable({
  providedIn: 'root'
})
export class FitService {
  url:string="http://localhost:3000/Fitness"
  constructor(private http:HttpClient) { }
  getUsers():Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  saveAppointment(appointment:any)
  {
    
    return this.http.post("http://localhost:3000/Fitness",appointment)

  }


}
