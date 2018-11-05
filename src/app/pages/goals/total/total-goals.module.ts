import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AmChartsModule } from '@amcharts/amcharts3-angular';

import { TotalGoalsComponent } from './total-goals.component';
import { DonutSectionComponent } from '../components/donut-section/donut-section.component';
import { InputToggleComponent } from '../components/input-toggle/input-toggle.component';

const routes: Routes = [
	{
		path: '',
		component: TotalGoalsComponent
	}
];

@NgModule ({
	imports: [
		FormsModule,
		CommonModule,
		AmChartsModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		TotalGoalsComponent,
		DonutSectionComponent,
		InputToggleComponent
	]
})
export class TotalGoalsModule { }