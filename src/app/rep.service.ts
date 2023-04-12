import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rep } from './rep';

@Injectable({
  providedIn: 'root'
})
export class RepService {

  private baseUrl="http://localhost:8080/reps"

  constructor(private http:HttpClient) { }

  getRepList():Observable<Rep[]>
  {
    return this.http.get<Rep[]>(`${this.baseUrl}/getreps`);
  }

  createRep(rep:Rep):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/save`,rep);
  }

  getRepById(id:number):Observable<Rep>
  {
    return this.http.get<Rep>(`${this.baseUrl}/${id}`);
  }
  getByEmail(email:String):Observable<Rep>
  {
    return this.http.get<Rep>(`${this.baseUrl}/${'getByEmail'}/${email}`);
  }
  updateRepById(id:number,rep:Rep):Observable<Rep>
  {
    return this.http.put<Rep>(`${this.baseUrl}/${id}`,rep);
  }

  deleteRep(id:number):Observable<object>
  {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
