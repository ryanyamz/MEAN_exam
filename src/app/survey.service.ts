import { Injectable } from '@angular/core';
import { Survey } from './survey';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SurveyService {
  private base = '/api/survey';

  constructor(
    private http: Http,

  ) {}

  createSurvey(survey: Survey): Observable<Survey> {
    console.log('createSurvey in service', survey);
    return this.http.post(this.base, survey)
      .map(response => response.json());
  }

  getSurveys(): Observable<Survey[]> {
    return this.http.get(this.base)
      .map(response => response.json());
  }

  getSurvey(id: string): Observable<Survey> {
    return this.http.get(`${this.base}/${id}`)
      .map(response => response.json());
  }

  updateSurvey(id: string, survey: Survey): Observable<Survey> {
    console.log('service', survey);
    return this.http.put(`${this.base}/${id}`, survey)
      .map(response => response.json());
  }

  removeSurvey(id: string): Observable<Survey> {
    return this.http.delete(`${this.base}/${id}`)
      .map(response => response.json());
  }


}
