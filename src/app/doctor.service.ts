import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL="http://localhost:8080/doctors"; 
  constructor(private http:HttpClient) { }

  getDoctorsList():Observable<Doctor[]>
  {
    return this.http.get<Doctor[]>(`${this.baseURL}/getdoctors`); 
  }

  createDoctor(doctor:Doctor):Observable<object>
  {
    return this.http.post(`${this.baseURL}/save`,doctor);
  }

  getDoctorById(id:number):Observable<Doctor>
  {
    return this.http.get<Doctor>(`${this.baseURL}/${id}`);
  }
  getByEmail(email:String):Observable<Doctor>
  {
    return this.http.get<Doctor>(`${this.baseURL}/${"getByEmail"}/${email}`);
  }

  updateDoctorById(id:number,doctor:Doctor):Observable<Doctor>
  {
    return this.http.put<Doctor>(`${this.baseURL}/${id}`,doctor);
  }

  deleteDoctor(id:number):Observable<object>
  {
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }
}