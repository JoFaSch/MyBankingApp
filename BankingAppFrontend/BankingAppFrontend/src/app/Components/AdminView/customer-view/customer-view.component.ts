import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/Services/rest-service.service';
import { Customer } from 'src/app/Models/Customer';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  
    customerList: Customer[];
    loggedInUser:Customer;
    totalBalance: number;
    test: boolean;
  constructor(private rest:RestServiceService,
              private localS: LocalStorageService) { }



  ngOnInit() {
    this.rest.getCustomers().subscribe(v => this.customerList=v);
    this.loggedInUser = this.localS.getItem('loggedInUser');
    if(this.loggedInUser){
      this.rest.getCustomer(this.loggedInUser.id).subscribe(v => {
        this.loggedInUser = v;
        for(let account of this.loggedInUser.accountList) {
          this.totalBalance += account.balance;
        }
      })
  }
  this.test = false;
}

testi(){
  this.test= !this.test;
}



}
