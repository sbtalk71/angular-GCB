import { Injectable } from '@angular/core';
import { Emp } from './emp';
import { empdata } from './empdata';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public getEmpList(): Emp[]{
    return empdata;
  }
}
