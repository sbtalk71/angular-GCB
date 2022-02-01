import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterState } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("openClose", [
      state("open", style({ height: '200px', opacity: 1, backgroundColor: "yellow" })),
      state("closed", style({ height: '100px', opacity: 0.8, backgroundColor: "blue" })),
      transition('open=>closed', [animate('1s')]),
      transition('colosed=>open', [animate('2s')])
    ]),

    trigger("flyInOut", [
      transition('void=>*', [animate('1s'),style({transform:'translateX(-100%)'})]),
      transition('*=>void', [animate('2s'),style({transform:'translateX(100%)'})])
    ]),

    trigger("rotate", [
      state("show", style({opacity: 1, backgroundColor: "yellow" })),
      state("hide", style({ opacity: 0.5, backgroundColor: "blue",transform:'rotate(270deg)' })),
      transition('show=>hide', [animate('1s')]),
      transition('hide=>show', [animate('2s')])
    ]),
  ]
})
export class AppComponent {
  isOpen=true;
  public showDiv=true;
  public state='open';
  title = 'angular-animations';
  public flag='open';

  public toggel(){
    if(this.isOpen){
      this.isOpen=false;
      this.state='open';
    }else{
      this.isOpen=true;
      this.state='closed';
    }
  }

  public activateFly(){
    this.showDiv=this.showDiv ? false:true;
  }

  public doRotate(){
    if(this.flag=="show"){
      this.flag="hide";
    }else{
      this.flag="show";
    }
  }
}
