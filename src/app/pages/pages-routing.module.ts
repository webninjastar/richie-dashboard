import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';

const routes: Routes = [
    {
        path: '', component: PageComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'goals', loadChildren: './goals/goals.module#GoalsModule' },
            { path: 'budget', loadChildren: './budget/budget.module#BudgetModule' },
            { path: 'spending', loadChildren: './spending/spending.module#SpendingModule' },
            { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule' },
            { path: 'transfers', loadChildren: './transfers/transfers.module#TransfersModule' },
            { path: 'upgrade', loadChildren: './upgrade/upgrade.module#UpgradeModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
