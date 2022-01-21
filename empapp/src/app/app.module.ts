import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { EmplistComponent } from './emplist/emplist.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
