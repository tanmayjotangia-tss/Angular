import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './feature/auth/login/login';
import { Registration } from './feature/auth/registration/registration';
import { AdminDashboard } from './feature/admin/admin-dashboard/admin-dashboard';
import { UserDashboard } from './feature/users/user-dashboard/user-dashboard';
import { AuthGuard } from './core/guards/auth-guard';
import { RoleGuard } from './core/guards/role-guard';

const routes: Routes = [
  {path:'login',component:Login},
  {path:'register',component:Registration},
  {path:'',component:Login},
  {path:'admin',component:AdminDashboard, canActivate:[AuthGuard,RoleGuard],data:{roles:"ROLE_ADMIN"}},
  {path:'user',component:UserDashboard, canActivate:[AuthGuard,RoleGuard],data:{roles:"ROLE_USER"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
