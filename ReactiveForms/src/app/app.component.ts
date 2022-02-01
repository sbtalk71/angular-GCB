import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveForms';

  /*
  public regForm: FormGroup=new FormGroup(
    {
      userName: new FormControl('Shantanu'),
      password: new FormControl(''),
      email: new FormControl('')
    }
  );
  */
  public regForm: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.regForm = this.fb.group({
      userName: ['John',[Validators.required,Validators.minLength(5)]],
      password: [''],
      email: ['',[Validators.email]]
    });
  }


  public onSubmit() {
    console.log(this.regForm.value)
  }

  get userName(){
    return this.regForm.get('userName');
  }
}
