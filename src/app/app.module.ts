import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { SigninComponent } from './modules/auth/signin/signin.component';
import { SharedModule } from './modules/shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopNavComponent,
    DashboardComponent,
    SidebarItemComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    NgbModule
  ],
  providers: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
