import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccountMandateComponent } from './account-mandate/account-mandate.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    AccountMandateComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
