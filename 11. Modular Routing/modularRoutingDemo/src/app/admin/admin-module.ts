import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Dashboard } from './component/dashboard/dashboard';
import { ApproveBank } from './component/approve-bank/approve-bank';
import { ApproveClient } from './component/approve-client/approve-client';
import { BankList } from './component/bank-list/bank-list';
import { ClientList } from './component/client-list/client-list';


@NgModule({
  declarations: [
    Dashboard,
    ApproveBank,
    ApproveClient,
    BankList,
    ClientList
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
