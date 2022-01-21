import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import {FormsModule} from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { AttrDirectivesComponent } from './attr-directives/attr-directives.component';
import { HighlightDirective } from './highlight.directive'
import { HighlightDirective2 } from './highlight2.directive';
import { HighlightDirective3 } from './highlight3.directive';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropBindingComponent,
    TwoWayComponent,
    ContentComponent,
    PipesComponent,
    DirectivesComponent,
    AttrDirectivesComponent,
    HighlightDirective,
    HighlightDirective2,
    HighlightDirective3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
