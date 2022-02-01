import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = "User Form";
  userForm: FormGroup;
  user = { name: '', email: '' };
  submitted = false;

  constructor( private _service:UserService) {
    this.createUserForm();
  }

  ngOnInit(): void {
  }


  createUserForm() {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email])
    }
    );
  }

  public onSubmit() {
    this.submitted = true;
    console.log("Form Submitted");
    this._service.registerUser(this.userForm.value);

  }


}
