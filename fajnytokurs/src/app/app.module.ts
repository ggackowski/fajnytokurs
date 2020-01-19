import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CourseComponent } from './course/course.component';
import { RatingComponent } from './rating/rating.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FilterComponent } from './filter/filter.component';
import { SearchPipe } from './search-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { CourseService } from './course.service';
import { CourseDetailsComponent } from './course-details/course-details.component'
import { SearchingService } from './searching.service'
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AuthGuardService } from './auth-guard.service';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const appRoutes: Routes = [
  { path: 'course/:id',      component: CourseDetailsComponent },
  {
    path: 'courses',
    component: MainpageComponent,
    data: { title: 'tytul' }
  },
  { path: 'edit/:id',      component: EditCourseComponent },
  { path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddCourseComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginScreenComponent
  },
  {
    path: 'register',
    component: RegisterScreenComponent
  },
  {
    path: 'panel',
    component: UserPanelComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CourseComponent,
    RatingComponent,
    CoursesListComponent,
    AddCourseComponent,
    FilterComponent,
    SearchPipe,
    CourseDetailsComponent,
    MainpageComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    UserPanelComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // do obsługi autentykacji
    AngularFirestoreModule, // do obslugi baz danych
    AngularFireDatabaseModule // do obslugi baz danych
  ],
  providers: [CourseService, SearchingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
