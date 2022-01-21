import { Component, OnInit } from '@angular/core';

@Component({
    selector:"demo3-comp",
    template: `
    <h1>Demo3 Component</h1>
    `,
    styles: [`
    h1{
        color:blue
    }
    `]
})

export class Demo3Comopnent implements OnInit{

    constructor(){

    }
    ngOnInit(){

    }
}