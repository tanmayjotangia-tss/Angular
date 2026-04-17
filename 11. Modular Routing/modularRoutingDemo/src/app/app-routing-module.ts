import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'admin', loadChildren: () => import('./admin/admin-module').then((m) => m.AdminModule)
   },
  { 
    path: 'bank', loadChildren: () => import('./bank/bank-module').then((m) => m.BankModule)
   },
  {
    path: 'client',
    loadChildren: () => import('./client/client-module').then((m) => m.ClientModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
