import { Routes } from "@angular/router";
import { RcvalidationComponent } from './app/components/rcvalidation/rcvalidation.component';
import { HomeComponent } from './app/components/home/home.component'
import { OnboardingComponent } from "./app/components/onboarding/onboarding.component";

export const appRoutes: Routes = [
    { path: 'rc-validation', component: RcvalidationComponent },
    { path: 'onboarding', component: OnboardingComponent },
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
]