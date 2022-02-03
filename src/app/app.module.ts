import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RcvalidationComponent } from './components/rcvalidation/rcvalidation.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SiderNavComponent } from './components/shared/sider-nav/sider-nav.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { ReviewComponent } from './components/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RcvalidationComponent,
    OnboardingComponent,
    FooterComponent,
    SiderNavComponent,
    DashboardComponent,
    AppLayoutComponent,
    DashboardLayoutComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
