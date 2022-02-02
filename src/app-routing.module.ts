import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./app/components/dashboard/dashboard.component";
import { OnboardingComponent } from "./app/components/onboarding/onboarding.component";
import { HomeComponent } from "./app/components/pages/home/home.component";
import { RcvalidationComponent } from "./app/components/rcvalidation/rcvalidation.component";

export const appRoutes: Routes = [
  { path: 'rc-validation', component: RcvalidationComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: '',
      loadChildren: () => import('./app/components/dashboard/dashboard.module').then(m => m.DashboardModule),
    }]
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
