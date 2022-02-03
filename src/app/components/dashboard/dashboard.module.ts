import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountMandateComponent } from './account-mandate/account-mandate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReviewComponent } from './review/review.component';




@NgModule({
  declarations: [
    WelcomeComponent,
    AccountMandateComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
