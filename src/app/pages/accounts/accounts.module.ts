import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AccountsComponent } from './accounts.component';

const routes: Routes = [{
	path: '',
	component: AccountsComponent
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AccountsComponent
  ]
})
export class AccountsModule {}