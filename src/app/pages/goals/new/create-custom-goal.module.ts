import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatSliderModule, MatCheckboxModule } from '@angular/material';

import { CreateCustomGoalComponent } from './create-custom-goal.component';

const routes: Routes = [
	{ path: '', component: CreateCustomGoalComponent }
];

@NgModule ({
	imports: [
		CommonModule,
		FormsModule,
		MatSliderModule,
		MatCheckboxModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		CreateCustomGoalComponent
	]
})
export class CreateCustomGoalModule { }