import * as $ from 'jquery';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BudgetComponent } from './budget.component';

const routes: Routes = [{
	path: '',
	component: BudgetComponent
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BudgetComponent
  ]
})
export class BudgetModule {}