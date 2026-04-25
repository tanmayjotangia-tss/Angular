import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: false,
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard {

    constructor(private route:Router){}

    logout(){
    localStorage.removeItem("token")
    this.route.navigate(['/login'])
  }

}
