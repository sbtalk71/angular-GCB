import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url="http://localhost:3000/register";
  constructor(private _http:HttpClient) { }


  public registerStudent(studentModel:Student): Observable<any>{
    return this._http.post<any>(this.url,studentModel);
  }

}
