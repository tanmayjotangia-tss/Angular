import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './feature/auth/login/login';
import { Registration } from './feature/auth/registration/registration';
import { AdminDashboard } from './feature/admin/admin-dashboard/admin-dashboard';
import { UserDashboard } from './feature/users/user-dashboard/user-dashboard';

const routes: Routes = [
  {path:'login',component:Login},
  {path:'register',component:Registration},
  {path:'',component:Login},
  {path:'admin',component:AdminDashboard},
  {path:'user',component:UserDashboard}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
