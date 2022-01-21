import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.css']
})
export class PropBindingComponent implements OnInit {

  public name = "John";
  public isDisabled = true;
  public t1 = "myId";
  public btn_lable = "Enable";
//styles
public success="text-success";
public hasError=false;
public isSpecial=true;

  constructor() { }

  ngOnInit(): void {
  }

  enableInput() {
    if (this.isDisabled) {
      this.isDisabled = false;
      this.btn_lable = "Disable";
    } else {
      this.isDisabled = true;
      this.btn_lable = "Enable";
    }
  }

  onClick(data:string){
      console.log(data);
      this.name=data;
  }

}
