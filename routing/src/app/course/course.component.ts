import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public courses: Course[] = [
    { courseId: 100, courseName: "Python" },
    { courseId: 101, courseName: "Java" },
    { courseId: 102, courseName: "Scala" },
    { courseId: 103, courseName: "Ruby" },
    { courseId: 104, courseName: "Go" },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onClick(courseId: number) {
    this.router.navigate(["/course",courseId]);
  }
}
