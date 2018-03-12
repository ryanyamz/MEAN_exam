import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SurveyNewComponent } from './surveys/new/new.component';
import { SurveyListComponent } from './surveys/list/list.component';
import { SurveyDetailComponent } from './surveys/detail/detail.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'surveys',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: SurveyNewComponent
      },
      {
        path: 'list',
        component: SurveyListComponent
      },
      {
        path: ':id',
        component: SurveyDetailComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
