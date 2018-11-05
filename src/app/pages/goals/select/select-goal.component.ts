import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	templateUrl: './select-goal.component.html',
  	styleUrls: ['./select-goal.component.css']
})
export class SelectGoalComponent {
	public standardStats = false;
	public expressStats = false;
  public btn_status = true;

  constructor(private router: Router) {
    console.log("select goal page appeared.");
  }

  selectStandard = function() {
  	this.standardStats = true;
  	this.expressStats = false;
    this.btn_status = false;
  }

  selectExpress = function() {
  	this.standardStats = false;
  	this.expressStats = true;
    this.btn_status = false;
  }

  continue = function() {
    if (this.standardStats) {
      this.router.navigateByUrl('/goals/new');
    } else {
      this.router.navigateByUrl('/goals')
    }
  }
}
