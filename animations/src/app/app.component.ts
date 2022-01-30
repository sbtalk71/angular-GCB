import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  animations: [
    trigger("flyInOut", [
      transition("void=>*", [style({ transform: "translateX(-100%)" }), animate('1s')]),
      transition("*=>void",animate('1s',style({ transform: "translateX(100%)" })))
    ]),
    trigger("toggleView", [
    state("hide",style({opacity:0})),
    state("show",style({opacity:1,color:'blue',transform:'rotate(340deg)'})),
      transition("hide=>show", animate('2s')),
      transition("show=>hide",animate('1s'))
    ])
  ]
})
export class AppComponent {
  title = 'animations';
  public showDiv=true;
  public visibility='hide';

 public  toggle(){
  this.showDiv=this.showDiv ? false:true;
  }

  public animateNow(){
    if(this.visibility=="hide"){
      this.visibility="show";
    }else{
      this.visibility="hide";
    }
  }
}
