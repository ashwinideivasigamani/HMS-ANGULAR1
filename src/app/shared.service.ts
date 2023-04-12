import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService  {

  constructor() { }
  private newData=new BehaviorSubject<any>('');
  emit<T>(data:T)
  {
    this.newData.next(data);
  }
  on<T>():Observable<T>
  {
    
    return this.newData.asObservable();
  }
 

}
