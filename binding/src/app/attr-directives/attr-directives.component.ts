import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-directives',
  templateUrl: './attr-directives.component.html',
  styleUrls: ['./attr-directives.component.css']
})
export class AttrDirectivesComponent implements OnInit {
public hasError=false;
public special=true;

  ngOnInit(): void {
  }
  public myStyle = {
      color:"blue",
      fontStyle:"italic"
  }
public styleClasses={
  "text-success":!this.hasError,
  "text-error":this.hasError,
  "text-styled":this.special
}
  public changeColor(){
    this.myStyle.color="green"
  }
}
