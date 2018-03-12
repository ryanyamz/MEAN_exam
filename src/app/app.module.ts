import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CookieModule } from 'ngx-cookie';

import { UserService } from './user.service';
import { SurveyService } from './survey.service';


import { AppComponent } from './app.component';
import { SurveyNewComponent } from './surveys/new/new.component';
import { SurveyListComponent } from './surveys/list/list.component';
import { SurveyDetailComponent } from './surveys/detail/detail.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    SurveyNewComponent,
    SurveyListComponent,
    SurveyDetailComponent,
    UserComponent
  ],
  imports: [
    CookieModule.forRoot(),
    HttpModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    UserService,
    SurveyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
