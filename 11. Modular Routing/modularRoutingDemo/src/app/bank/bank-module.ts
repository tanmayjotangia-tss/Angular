import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing-module';
import { BankDashboard } from './component/bank-dashboard/bank-dashboard';


@NgModule({
  declarations: [
    BankDashboard
  ],
  imports: [
    CommonModule,
    BankRoutingModule
  ]
})
export class BankModule { }
