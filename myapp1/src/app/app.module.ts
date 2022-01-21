import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Comopnent } from './demo3/demo3.component';
import { HighlightDirective } from './highlight.directive';
import { HighlightDirective2 } from './highlight2.directive';
import { HighlightDirective3 } from './highlight3.directive';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    Demo3Comopnent,
    HighlightDirective,
    HighlightDirective2,
    HighlightDirective3,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
