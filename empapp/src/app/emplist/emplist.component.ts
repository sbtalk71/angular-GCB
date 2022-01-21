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
  constructor(private _appService:AppService) { }

  ngOnInit(): void {
   this.emps= this._appService.getEmpList();
  }
  onClick(id:number){
    console.log("You select emp with id : "+id);
  }
}
