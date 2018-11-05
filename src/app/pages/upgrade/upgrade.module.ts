import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { UpgradeComponent } from './upgrade.component';

const routes: Routes = [{
	path: '',
	component: UpgradeComponent
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UpgradeComponent
  ]
})
export class UpgradeModule {}