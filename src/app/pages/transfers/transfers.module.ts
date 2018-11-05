import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TransfersComponent } from './transfers.component';

const routes: Routes = [{
	path: '',
	component: TransfersComponent
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TransfersComponent
  ]
})
export class TransfersModule {}