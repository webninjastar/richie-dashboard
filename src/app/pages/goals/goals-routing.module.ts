import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalsComponent } from './goals.component';

const routes: Routes = [
	{
		path: '',
		component: GoalsComponent,
		children: [
			{ path: '', loadChildren: './total/total-goals.module#TotalGoalsModule' },
			{ path: 'select', loadChildren: './select/select-goal.module#SelectGoalModule' },
			{ path: 'new', loadChildren: './new/create-custom-goal.module#CreateCustomGoalModule' },
			{ path: 'detail/:id', loadChildren: './view/view-goal.module#ViewGoalModule' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GoalsRoutingModule { }