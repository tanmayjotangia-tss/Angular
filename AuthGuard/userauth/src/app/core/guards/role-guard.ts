import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate{

  constructor(private authService:AuthService,private route:Router){}

  canActivate(snapshot:ActivatedRouteSnapshot) {
    const role = this.authService.getUserRole()
    const path = snapshot.data['roles']

    if(role == path){
      return true
    }
     this.route.navigate(['/login'])
    return false
  }
  
}
