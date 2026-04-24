import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private fb:FormBuilder,private authService:AuthService){}

  loginForm!:FormGroup
    ngOnInit(){
    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }


  doLogin(){
    this.authService.register(this.loginForm.value).subscribe({
      next:()=>{
        alert("Registration Successful")
        
      },
      error:()=>{
        alert("Registration Failed")
      }
    })
  }
}
