import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentsComponent } from "./departments/departments.component";
import { EmployeeComponent } from "./employee/employee.component";
import { StoreFrontComponent } from "./store-front/store-front.component";

const storeRoutes:Routes=[
    {
        path: '', component: StoreFrontComponent, children: [
          { path: 'employee', component: EmployeeComponent },
          { path: 'dept', component: DepartmentsComponent }
        ]
      }
]
@NgModule({
imports:[RouterModule.forChild(storeRoutes)],
exports:[RouterModule]
})
export class StoresRoutingModule{

}