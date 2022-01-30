import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public hasError = true;
  public submitted=false;
  public message='';

  public courses = ["Python", "Java", "Angular", "Scala", "C#"];
  public studentModel = new Student("Shantanu", "sbtalk@gmail.com", 9391329788, "Java", "morning", true);

  constructor(private _service: RegisterService) {

  }
  public validateCourse(value: string) {
    console.log(value);
    if (value === "defualt") {
      this.hasError = true;
    } else {
      this.hasError = false;
    }
    console.log(this.hasError);
  }

  public onSubmit() {
    this.submitted=true;
    console.log(this.studentModel);
    this._service.registerStudent(this.studentModel).subscribe(response=>this.message=response.message);
  }
}
