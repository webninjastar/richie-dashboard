import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SelectGoalComponent } from './select-goal.component';

const routes: Routes = [
	{ path: '', component: SelectGoalComponent }
];

@NgModule ({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		SelectGoalComponent
	]
})
export class SelectGoalModule { }