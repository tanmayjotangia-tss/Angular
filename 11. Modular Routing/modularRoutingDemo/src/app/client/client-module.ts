import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing-module';
import { ClientDashboard } from './component/client-dashboard/client-dashboard';


@NgModule({
  declarations: [
    ClientDashboard
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
