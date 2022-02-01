import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input("receivedData") parentData: string = ""
  @Output("emittedEvent") public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public fireEvent(data:string) {
    this.childEvent.emit(data);
  }
}
