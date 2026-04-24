import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private fb:FormBuilder,private authService:AuthService, private route:Router){}

  loginForm!:FormGroup
    ngOnInit(){
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }


  doLogin(){
    this.authService.login(this.loginForm.value).subscribe({
      next:(response:any)=>{
        alert("Login Successful")
        console.log(response.accessToken);
        this.authService.saveToken(response.accessToken)
        this.route.navigate(['/admin'])
      },
      error:()=>{
        alert("Login Failed")
      }
    })
  }
}
