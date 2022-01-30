import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  public courseId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.courseId = parseInt(id);
    });
  }
  public previous() {
    let previous = this.courseId - 1;
    this.router.navigate(["/course", previous])
    
  }
  public next() {
    let next = this.courseId + 1;
    this.router.navigate(["/course", next])
   
  }

  public goToCourse(){
    let selectedId=this.courseId ? this.courseId : null;
    console.log(selectedId);
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})
  }
}
