import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { EmplistComponent } from './emplist/emplist.component';
import { DetailsComponent } from './details/details.component';
import { EmphttpService } from './emphttp.service';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService,EmphttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
