import { Injectable } from '@angular/core';
import { Emp } from './emp';
import { empdata } from './empdata';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private foundEmp:Emp;// = { empId: 109, name: 'Puran', city: 'Hyderabad', salary: 78000 };
  constructor() { }

  public getEmpList(): Emp[] {
    return empdata;
  }

  public findEmpById(id: number) {
    for (let i = 0; i < empdata.length; i++) {
      if (id == empdata[i].empId) {
        this.foundEmp = empdata[i];
        break;
      }
    }
    return this.foundEmp;
  }
}
