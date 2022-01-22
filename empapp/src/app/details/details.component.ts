import { Component, Input, OnInit } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()public emp!:Emp;
  constructor() { }

  ngOnInit(): void {
  }

}
