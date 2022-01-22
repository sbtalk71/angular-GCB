import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Emp } from '../emp';
import { empdata } from '../empdata';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  public emps:Emp[]=[];
  public emp!:Emp;//={empId:109,name:'Puran',city:'Hyderabad',salary:78000};
  constructor(private _appService:AppService) { }

  ngOnInit(): void {
   this.emps= this._appService.getEmpList();
  }
  public onClick(id:number){
    //console.log("You select emp with id : "+id);
    this.emp=this._appService.findEmpById(id);
    //console.log(this.emp.empId+" "+this.emp.name)
  }



}
