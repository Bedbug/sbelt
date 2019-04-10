import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Components
import { ContentComponent } from './layouts/content/content.component';
// Routes
import { content } from "./shared/routes/content.routes";
import { LandingComponent } from './landing/landing.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './authentication/login/login.component';



const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'pages/stater-kit',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  { 
    path: 'landing', 
    component: LandingComponent
  },
  { 
  	path: '', 
  	component: ContentComponent,
    children: content,
    canActivate: [AuthGuard]
  },
  { 
  	path: 'login', 
  	component: LoginComponent  	
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}