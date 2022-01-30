import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public courses:Course[]=[
    {courseId:100,courseName:"Python",instructor:"John Davy",duration: "6 weeks"},
    {courseId:101,courseName:"Java",instructor:"Sunil",duration: "16 weeks"},
    {courseId:102,courseName:"Scala",instructor:"John Davy",duration: "16 weeks"},
    {courseId:103,courseName:"Ruby",instructor:"Kiran",duration: "8 weeks"},
    {courseId:104,courseName:"Go",instructor:"John Davy",duration: "12 weeks"},
    {courseId:105,courseName:"Angular",instructor:"John Davy",duration: "6 weeks"},
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  public onSelect(courseId:number){
    this.router.navigate(["/courses",courseId],{queryParams:{name:"Shantanu",city:"Hyderabad"}}); //course/courseId
  }

}
