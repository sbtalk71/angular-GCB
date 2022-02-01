import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreFrontComponent } from './store-front/store-front.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentsComponent } from './departments/departments.component';
import { StoresRoutingModule } from './stores-routing.module';



@NgModule({
  declarations: [
    StoreFrontComponent,
    EmployeeComponent,
    DepartmentsComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule
  ],
  exports: [
    StoreFrontComponent,
    EmployeeComponent,
    DepartmentsComponent]
})
export class StoresModule {
  constructor(){
    console.log("Stores Module loaded");
  }
}
