import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { LoginResponse } from './login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private baseUrl="http://localhost:8080";
  isLoggedIn: any;
  constructor(private http:HttpClient) { }
  
  login(login:Login):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.baseUrl}/login/authenticate`,login);
  }
}
