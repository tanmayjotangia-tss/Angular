import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing-module';
import { BankDashboard } from './component/bank-dashboard/bank-dashboard';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    BankDashboard
  ],
  imports: [
    CommonModule,
    BankRoutingModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class BankModule { }
