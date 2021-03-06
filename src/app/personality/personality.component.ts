import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personality } from './personality';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./personality.component.css']
})
export class PersonalityComponent implements OnInit {

  success:string;
  isSuccess:boolean;
  formData:Personality;
  saveSurveyUrl = 'https://cognitive-health-toolshed.herokuapp.com/surveys/personality/saveSurvey/';

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    this.formData = new Personality();

  }

  saveSurvey = function() {
  
    this.formData.scoreTotal = this.formData.score1 - this.formData.score2;
    this.http.post(this.saveSurveyUrl, this.formData, httpOptions).subscribe(
      res => {
        console.log(res);
        this.success = "SUCCESS";
        this.isSuccess = true;
      },
      err => {
        console.log("Error occured");
        this.success = "ERROR";
      }
    );
  }

}
