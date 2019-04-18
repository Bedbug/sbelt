import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

import { DashboardShiftrequestsComponent} from '../dashboard/dashboard-shiftrequests/dashboard-shiftrequests.component';

@NgModule({
  declarations: [    
    DashboardComponent,
    DashboardShiftrequestsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }