import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from './emp';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmphttpService {
  

  private url = "/assets/data/empdata.json"
  constructor(private _http: HttpClient) { }

<<<<<<< HEAD
  public getEmpList(): Observable<Emp[]> {
    return this._http.get<Emp[]>(this.url);
  }
  public getEmpById(id: number): Observable<Emp> {
    return this.getEmpList().pipe(map(e => { return e.find(emp => emp.empId === id) }));
  }
=======
 public getEmpList():Observable<Emp[]>{
   return this._http.get<Emp[]>(this.url);
 }
>>>>>>> fb224ff9ae7d5fbd01adc232667f3db285ee0803

 findEmpById(id: number): Observable<Emp> {
  return this.getEmpList().pipe(map(er=>er.find(e=>e.empId===id)));


}
}
