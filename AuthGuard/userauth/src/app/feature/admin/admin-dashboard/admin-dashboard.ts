import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {

  constructor(private route:Router){}

  logout(){
    localStorage.removeItem("token")
    this.route.navigate(['/login'])
  }

}
