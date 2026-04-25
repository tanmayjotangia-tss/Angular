import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl="http://localhost:8080/auth/register"
  private loginUrl="http://localhost:8080/auth/login"
  private baseUrl="http://localhost:8080/auth"
  private token:any;
  constructor(private http:HttpClient){}

  register(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/register`,data)
  }

  login(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/login`,data)
  }

  saveToken(token:any){
      localStorage.setItem("token",token)
  }

  getToken(){
    return localStorage.getItem("token")
  }

  getUserRole(){
    this.token = this.getToken()

    const payload = JSON.parse(atob(this.token.split('.')[1]))
    console.log(payload)
    const role = payload.roles[0]
    console.log(role);
    return role;
  }

  isLoggedIn():boolean{
    if(this.getToken()){
      return true
    }
    return false
  }
}
