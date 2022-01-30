import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  public selectedId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.selectedId = parseInt(this.route.snapshot.paramMap.get("id"));
    //
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get("id");
      this.selectedId = parseInt(id);
    });
    //
    this.route.queryParams.subscribe((queryParams:Params)=>{
      let name=queryParams['name'];
      let city=queryParams['city'];
      console.log(name+" "+city);
    });
  }
  public goPrevious() {
    let previousId = this.selectedId - 1;
    //this.router.navigate(["/course",previousId]);
    this.router.navigate(["../", previousId], { relativeTo: this.route });
  }

  public goNext() {
    let nextId = this.selectedId + 1;
    this.router.navigate(["../", nextId], { relativeTo: this.route });
  }

  public goToCourse() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  public getFees() {
    this.router.navigate(["fees"], { relativeTo: this.route });
  }

  public contactInfo() {
    this.router.navigate(["contact"], { relativeTo: this.route });
  }
}
