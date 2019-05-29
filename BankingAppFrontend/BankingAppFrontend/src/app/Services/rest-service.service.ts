import { Injectable, Optional } from '@angular/core';
import { Customer } from '../Models/Customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateAccountRQ } from '../Models/UpdateAccountRQ';
import { Account } from '../Models/Account';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient) { }

  URL='http://localhost:8080';

  postCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.URL + '/customer', customer);
  }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.URL + '/customers');
  }

  putCustomer(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(this.URL + '/customer', customer);
  }

  deleteCustomer(id: number){
    this.http.delete(this.URL + '/customer/' + id).subscribe();
  }

  transferMoney(req: UpdateAccountRQ): Observable<UpdateAccountRQ>{
   return this.http.put<UpdateAccountRQ>(this.URL + '/update', req);
  }

  getCustomer(id: number): Observable<Customer>{
    return this.http.get<Customer>(this.URL + '/customer/' + id);
  }

  getAccount(iban: string): Observable<Account>{
    return this.http.get<Account>(this.URL + '/byIban/' + iban)
  }

  addAccount(customerId: number, accountName: string): Observable<Customer>{
    return this.http.put<Customer>(this.URL + '/addAccount/' + customerId + '/' + accountName, {});
  }

  getCustomerByLastName(lastName:string): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.URL + '/customers/' + lastName);
  }

}
