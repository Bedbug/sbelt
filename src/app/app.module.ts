import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContentComponent } from './layouts/content/content.component';
import { ConfigModule, ConfigService } from './services/config.service';
import * as $ from 'jquery';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { JwtInterceptor } from './helpers/jws.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginWithImageComponent } from './pages/authentication/login-with-image/login-with-image.component';
import { LoginWithVideoComponent } from './pages/authentication/login-with-video/login-with-video.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { RegisterWithImageComponent } from './pages/authentication/register-with-image/register-with-image.component';
import { RegisterWithVideoComponent } from './pages/authentication/register-with-video/register-with-video.component';
import { UnlockUserComponent } from './pages/authentication/unlock-user/unlock-user.component';
import { ForgetPasswordComponent } from './pages/authentication/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/authentication/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LandingComponent,
    LoginComponent,
    LoginWithImageComponent,
    LoginWithVideoComponent, 
    RegisterComponent, 
    RegisterWithImageComponent, 
    RegisterWithVideoComponent, 
    UnlockUserComponent, 
    ForgetPasswordComponent, 
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule ,
    ReactiveFormsModule 
  ],
  providers: [    
    ConfigService,
    ConfigModule.init(),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],    
  bootstrap: [AppComponent]
})
export class AppModule { }
