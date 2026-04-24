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
  constructor(private http:HttpClient){}

  register(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/register`,data)
  }

  login(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/login`,data)
  }
}
