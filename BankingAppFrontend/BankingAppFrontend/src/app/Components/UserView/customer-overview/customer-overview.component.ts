import { Component, OnInit } from '@angular/core';
import { BehaviourServiceService } from 'src/app/Services/behaviour-service.service';
import { Customer } from 'src/app/Models/Customer';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { RestServiceService } from 'src/app/Services/rest-service.service';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {
  
  subscriptionToSubject;
  loggedInUser: Customer;
  totalBalance: number = 0;

  lastLogin;

  constructor(private localS: LocalStorageService,
              private rest: RestServiceService) { }

  ngOnInit() {
    // this.subscriptionToSubject= this.behaviour.getSubscription$().subscribe(value => this.customer= value);
    this.loggedInUser = this.localS.getItem('loggedInUser');
    if(this.loggedInUser){
      this.lastLogin=this.loggedInUser.date;
    }
    if(this.loggedInUser){
      this.rest.getCustomer(this.loggedInUser.id).subscribe(v => {
        this.loggedInUser = v;
        for(let account of this.loggedInUser.accountList) {
          this.totalBalance += account.balance;
        }
      })
  }

}


}
