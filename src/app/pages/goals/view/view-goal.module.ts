import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material';
import { AngularEchartsModule } from 'ngx-echarts';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

import { ViewGoalComponent } from './view-goal.component';
import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';

const routes: Routes = [{
    path: '',
    component: ViewGoalComponent
}];

@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        MatSliderModule,
        AngularEchartsModule,
        AmChartsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ViewGoalComponent,
        jqxChartComponent
    ]
})
export class ViewGoalModule {}