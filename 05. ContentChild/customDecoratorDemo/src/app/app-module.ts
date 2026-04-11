import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SetBackground } from './decorator/set-background';
import { Highlight } from './decorator/highlight';
import { HostListenerBinding } from './decorator/host-listner-binding';

@NgModule({
  declarations: [
    App,
    SetBackground,
    Highlight,
    HostListenerBinding
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
