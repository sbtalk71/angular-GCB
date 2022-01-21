import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  template: `
    <h2>From Demo2 Component</h2>
    <ng-content></ng-content>
    <div class="row">
    <div class="col">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Laptop</h5>
                <p class="card-text">get info about laptop</p>
            </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Laptop</h5>
                <p class="card-text">get info about laptop</p>
            </div>
        </div>
    </div>
</div>
  `,
  styles: [
    `h2{
      color: red;
    }`
  ]
})
export class Demo2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
