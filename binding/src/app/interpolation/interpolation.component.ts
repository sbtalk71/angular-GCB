import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <h2>
      Interpolation Demo!
    </h2>
    <h2>{{4+5}}</h2>
    <h2>{{message}}</h2>
    <h2>{{message.length}}</h2>
    <h2>{{message.toUpperCase()}}</h2>
    <h2>{{baseUrl}}</h2>
    <h2>{{greetUser()}}</h2>
  `,
  styles: [
  ]
})
export class InterpolationComponent implements OnInit {
public message:string="welcome to Angular";
public baseUrl=window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Welcome to interpolation";
  }

}
