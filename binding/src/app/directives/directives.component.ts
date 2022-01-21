import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public isTiger = true;

  public names = ["Shantanu", "Pavan", "Ranga", "Tirumala", "Raja", "Rajesh"];

  public color = "blue";
  public colors = ["red", "blue", "orange", 'green', "magenta"];
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color:string){
    this.color=color;
  }
}
