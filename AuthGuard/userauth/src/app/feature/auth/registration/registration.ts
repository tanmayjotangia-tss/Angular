import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {

  constructor(private fb:FormBuilder, private authService:AuthService, private route:Router){}

  registrationForm!:FormGroup
  ngOnInit(){
    this.registrationForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }

  doRegistration(){
    this.authService.register(this.registrationForm.value).subscribe({
      next:()=>{
        alert("Registration Successful")
        this.route.navigate(['/login'])

      },
      error:()=>{
        alert("Registration Failed")
      }
    })
  }
}
