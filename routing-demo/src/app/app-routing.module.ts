import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseComponent } from './course/course.component';
import { FeesComponent } from './fees/fees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: "courses", component: CourseComponent },
  { path: "details", component: CourseDetailsComponent },
  {
    path: "courses/:id", component: CourseDetailsComponent,
    children: [
      { path: "fees", component: FeesComponent },
      { path: "contact", component: ContactComponent }
    ]
  },
  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
