import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from './emp';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmphttpService {

  private url="/assets/data/empdata.json"
  constructor(private _http:HttpClient) { }

 public getEmpById(id:number):Observable<Emp>{
   return this._http.get<Emp>(this.url);
 }

}
