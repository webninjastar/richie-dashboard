import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { GoalsService } from '../../../services/index';

@Component({
	templateUrl: './create-custom-goal.component.html',
  	styleUrls: ['./create-custom-goal.component.css'],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false
})
export class CreateCustomGoalComponent {
  model: any = {};

  safety_collapse:boolean = false;
  retire_collapse:boolean = false;
  invest_collapse:boolean = false;
  
  constructor(
    private router: Router,
    private goalsServie: GoalsService) {}

  max = 50;
  min = 1;
  step = 1;

  changeIcon_1 = function() {
    this.safety_collapse = this.safety_collapse == false ? true: false;
  }
  changeIcon_2 = function() {
    this.retire_collapse = this.retire_collapse == false ? true: false;
  }
  changeIcon_3 = function() {
    this.invest_collapse = this.invest_collapse == false ? true: false;
  }

  saveGoal = function() {
    this.goalsServie.save(this.model)
        .subscribe(
          data => {
            this.alertService.success('Goals Creation successful', true);
            this.router.navigate(['/goals']);
          },
          error => {
            this.alertService.error(error);
          });
  }
}