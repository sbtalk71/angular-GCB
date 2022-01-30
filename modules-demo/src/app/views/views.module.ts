import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { LeftComponent } from './left/left.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    TopComponent,
    BottomComponent,
    LeftComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TopComponent,
    BottomComponent,
    LeftComponent,
    ContentComponent
  ]
})
export class ViewsModule { }
