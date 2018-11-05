import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularEchartsModule } from 'ngx-echarts';

import { SpendingComponent } from './spending.component';

const routes: Routes = [{
	path: '',
	component: SpendingComponent
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularEchartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SpendingComponent
  ]
})
export class SpendingModule {}