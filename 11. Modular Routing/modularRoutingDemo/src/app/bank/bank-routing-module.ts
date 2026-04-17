import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDashboard } from './component/bank-dashboard/bank-dashboard';

const routes: Routes = [
  {path:"" , component:BankDashboard}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
