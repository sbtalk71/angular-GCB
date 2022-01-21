import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name="Shantanu";
  public emp={id:100,name:'Shantanu',city:'Hyderabad'};
  public date=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
