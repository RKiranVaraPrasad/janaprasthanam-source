import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ListModule } from './list/list.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './administrator/dashboard/dashboard.module';
import { LoginComponent } from './administrator/auth/login/login.component';
import { BreakingNewsComponent } from './administrator/breaking-news/breaking-news.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BreakingNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    ListModule,
    SharedModule,
    DashboardModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
