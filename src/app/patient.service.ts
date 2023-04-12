import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
 

  private baseUrl="http://localhost:8080/patients";

  constructor(private http:HttpClient) { }

  getPatientsList():Observable<Patient[]>
  {
    return this.http.get<Patient[]>(`${this.baseUrl}/getpatients`);
  }

  createPatient(patient:Patient):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/save`,patient);
  }
  getByEmail(email:String):Observable<Patient>
  {
    return this.http.get<Patient>(`${this.baseUrl}/${"getEmail"}/${email}`);
  }
  getPatientById(id:number):Observable<Patient>
  {
    return this.http.get<Patient>(`${this.baseUrl}/${id}`);
  }

  updatePatientById(id:number,patient:Patient):Observable<Patient>
  {
    return this.http.put<Patient>(`${this.baseUrl}/${id}`,patient);
  }

  deletePatient(id:number):Observable<object>
  {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
