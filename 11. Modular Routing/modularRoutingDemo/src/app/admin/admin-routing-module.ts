import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './component/dashboard/dashboard';
import { ApproveBank } from './component/approve-bank/approve-bank';
import { ApproveClient } from './component/approve-client/approve-client';
import { BankList } from './component/bank-list/bank-list';
import { ClientList } from './component/client-list/client-list';

const routes: Routes = [
  {
    path:"",
    component:Dashboard,
    children:[
      {path:"approve-bank", component:ApproveBank},
      {path:"approve-client", component:ApproveClient},
      {path:"bank-list", component:BankList},
      {path:"client-list", component:ClientList}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
