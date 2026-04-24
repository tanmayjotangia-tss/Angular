import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './feature/auth/login/login';
import { Registration } from './feature/auth/registration/registration';

const routes: Routes = [
  {path:'login',component:Login},
  {path:'register',component:Registration},
  {path:'',component:Login}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
