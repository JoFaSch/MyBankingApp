import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value){
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key){
    return JSON.parse(localStorage.getItem(key));

  }

  reupdateCustomer(key, value){
    localStorage.clear();
    localStorage.setItem(key, JSON.stringify(value));
  }
    
  clear(){
    localStorage.clear();
  }

}
