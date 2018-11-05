import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component ({
	templateUrl: './total-goals.component.html',
	styleUrls: ['./total-goals.component.css']
})
export class TotalGoalsComponent {
  openPanel_1:boolean = false;
  openPanel_2:boolean = false;
  openPanel_3:boolean = false;
  openPanel_4:boolean = false;
  openPanel_5:boolean = false;
  
	constructor(private router: Router, private http: Http) { }

  changeIcon_1 = function() {
    this.openPanel_1 = this.openPanel_1 == false ? true: false;
  }
  changeIcon_2 = function() {
    this.openPanel_2 = this.openPanel_2 == false ? true: false;
  }
  changeIcon_3 = function() {
    this.openPanel_3 = this.openPanel_3 == false ? true: false;
  }
  changeIcon_4 = function() {
    this.openPanel_4 = this.openPanel_4 == false ? true: false;
  }
  changeIcon_5 = function() {
    this.openPanel_5 = this.openPanel_5 == false ? true: false;
  }

  selectGoal = function() {
      this.router.navigate(['/goals/select']);
  }
}