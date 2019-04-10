import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

export const content: Routes = [
  {
    path: 'base',
    loadChildren: './components/base/base.module#BaseModule'
  },
  {
    path: 'pages',
    loadChildren: './pages/page/page.module#PageModule'
  }
];