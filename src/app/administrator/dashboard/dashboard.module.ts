import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DahsboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
