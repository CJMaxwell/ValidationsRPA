import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountMandateComponent } from './account-mandate/account-mandate.component';
// import { DashboardComponent } from './dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  { path: '', component: WelcomeComponent },
  { path: 'account-mandate', component: AccountMandateComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
