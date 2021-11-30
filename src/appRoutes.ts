import { Routes } from "@angular/router";
import { RcvalidationComponent } from './app/components/rcvalidation/rcvalidation.component';
import { HomeComponent } from './app/components/home/home.component'

export const appRoutes: Routes = [
    { path: 'rc-validation', component: RcvalidationComponent },
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
]