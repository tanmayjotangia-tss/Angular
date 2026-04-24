import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './feature/auth/login/login';
import { Registration } from './feature/auth/registration/registration';
import { AdminDashboard } from './feature/admin/admin-dashboard/admin-dashboard';

const routes: Routes = [
  {path:'login',component:Login},
  {path:'register',component:Registration},
  {path:'',component:Login},
  {path:'admin',component:AdminDashboard}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
