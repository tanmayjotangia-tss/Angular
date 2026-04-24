import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Registration } from './feature/auth/registration/registration';
import { HttpClientModule } from '@angular/common/http';
import { Login } from './feature/auth/login/login';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboard } from './feature/admin/admin-dashboard/admin-dashboard';
import { UserDashboard } from './feature/users/user-dashboard/user-dashboard';

@NgModule({
  declarations: [
    App,
    Registration,
    Login,
    AdminDashboard,
    UserDashboard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
