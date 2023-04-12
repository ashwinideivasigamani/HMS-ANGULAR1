import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  app(id: number) {
    throw new Error('Method not implemented.');
  }

  private baseUrl="http://localhost:8080/appointments"

  constructor(private http:HttpClient) { }

  getAppList():Observable<Appointment[]>
  {
    return this.http.get<Appointment[]>(`${this.baseUrl}/getappointments`);
  }

  createApp(app:Appointment):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/save`,app);
  }

  getAppById(id:number):Observable<Appointment>
  {
    return this.http.get<Appointment>(`${this.baseUrl}/${id}`);
  }

  updateAppById(id:number,rep:Appointment):Observable<Appointment>
  {
    return this.http.put<Appointment>(`${this.baseUrl}/${id}`,rep);
  }

  deleteApp(id:number):Observable<object>
  {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
