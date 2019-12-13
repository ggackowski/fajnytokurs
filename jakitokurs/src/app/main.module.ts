import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { AppComponent } from './app/app.component';
import { CourseComponent } from './course/course.component';



@NgModule({
  declarations: [
  AppComponent,
  CourseComponent],
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MainModule { }
