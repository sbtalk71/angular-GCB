import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Emp } from '../emp';
import { empdata } from '../empdata';
import { EmphttpService } from '../emphttp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  public emps:Emp[]=[];
  public emp:Emp;//={empId:109,name:'Puran',city:'Hyderabad',salary:78000};
  constructor(private _appService:EmphttpService) { }

  ngOnInit(): void {
   this._appService.getEmpList().subscribe(data=>this.emps=data);
  }
  public onClick(id:number){
    console.log("You select emp with id : "+id);
  this._appService.findEmpById(id).subscribe(e=>console.log(e));
    //console.log(this.emp.empId+" "+this.emp.name)
  }



}
