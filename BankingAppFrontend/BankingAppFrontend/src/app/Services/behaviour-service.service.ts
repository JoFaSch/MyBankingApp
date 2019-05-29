import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../Models/Customer';

@Injectable({
  providedIn: 'root'
})
export class BehaviourServiceService {


  mySubject = new BehaviorSubject(new Customer());

  constructor() { }

  emitValue(value: Customer) {
    this.mySubject.next(value);
  }

  getSubscription$() {
    return this.mySubject;
  }




}
