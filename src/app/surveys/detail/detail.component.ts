import { Component, OnInit, EventEmitter } from '@angular/core';
import { Survey } from '../../survey';
import { SurveyService } from '../../survey.service';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class SurveyDetailComponent implements OnInit {
  survey: Survey;
  votes = new EventEmitter();



  constructor(
    private surveyService: SurveyService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap(params => this.surveyService.getSurvey(params.get('id')))
      .subscribe(survey => {
        this.survey = survey
      })

  }

  vote(id, option) {
    console.log('clicked vote', this.survey);
    this.survey[option] = 0;
    this.surveyService.updateSurvey(id, this.survey)
      .subscribe(survey => {
      this.survey[option]++;
        console.log('completed vote', survey )
      })
  }

}
