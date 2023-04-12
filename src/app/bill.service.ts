import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private baseUrl="http://localhost:8080/bill";

  constructor(private http:HttpClient) { }

  getBillList():Observable<Bill[]>
  {
    return this.http.get<Bill[]>(`${this.baseUrl}/all`);
  }

  createBill(bill:Bill):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/save`,bill);
  }

  getBillById(id:number):Observable<Bill>
  {
    return this.http.get<Bill>(`${this.baseUrl}/${id}`);
  }

  updateBillById(id:number,bill:Bill):Observable<Bill>
  {
    return this.http.put<Bill>(`${this.baseUrl}/${id}`,bill);
  }

  deleteBill(id:number):Observable<object>
  {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

}
