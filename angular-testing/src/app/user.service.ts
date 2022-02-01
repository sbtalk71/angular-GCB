import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public registerUser(data: any): string {
    return "Data Submitted";
  }
}
