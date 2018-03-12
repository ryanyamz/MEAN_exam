import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { Survey } from '../../survey';
import { SurveyService } from '../../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];
  errorMessage: string;
  user: User;

  constructor(
    private userService: UserService,
    private surveyService: SurveyService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.surveyService.getSurveys()
      .subscribe(surveys => {
        this.surveys = surveys
      });

    this.userService.getUser(this.userService.getUserID())
      .subscribe(user => this.user = user);
  }

  removeSurvey(survey: Survey): void {
    console.log('removing survey');
    this.surveyService.removeSurvey(survey._id)
      .subscribe(deletedSurvey => {
        console.log('deleted survey', deletedSurvey);
        this.surveys.splice(this.surveys.indexOf(survey), 1);
      },
      errorResponse => {
        this.errorMessage = errorResponse.json();
      });
  }

  onLogout(): void {
    this.userService.logout()
      .then(() => {
        console.log('logging out');
        this.router.navigate(['']);
      })
      .catch(error => {
        console.log('errors logging out', error)
      })
  }

}
