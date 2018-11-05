import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DonutSectionComponent } from './components/donut-section/donut-section.component';
import { InputToggleComponent } from './components/input-toggle/input-toggle.component';

import { AngularEchartsModule } from 'ngx-echarts';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [{
	path: '',
	data: {
        title: 'Dashboard',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Dashboard'}]
    },
	component: DashboardComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
	    AngularEchartsModule,
	    AmChartsModule,
		MatTabsModule,
    	RouterModule.forChild(routes)
    ],
	declarations: [
        DashboardComponent,
        InputToggleComponent,
        DonutSectionComponent
    ]
})
export class DashboardModule { }
