import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Survey } from '../../survey';
import { User } from '../../user';
import { SurveyService } from '../../survey.service';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class SurveyNewComponent implements OnInit {
  user: User;
  survey = new Survey();

  constructor(
    private surveyService: SurveyService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUser(this.userService.getUserID())
      .subscribe(user => this.user = user);
  }

  onSubmit(form: NgForm): void {
    this.survey.vote1 = 0;
    this.survey.vote2 = 0;
    this.survey.vote3 = 0;
    this.survey.vote4 = 0;
    console.log('in onSubmit survey component')
    this.surveyService.createSurvey({...this.survey, user: this.user})
      .subscribe(() => {
        this.router.navigate(['/surveys']);
      })
  }

}
