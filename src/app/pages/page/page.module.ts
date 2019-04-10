import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

@NgModule({
  declarations: [
    PageComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
