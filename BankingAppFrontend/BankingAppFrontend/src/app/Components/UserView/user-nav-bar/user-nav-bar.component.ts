import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/Customer';
import { BehaviourServiceService } from 'src/app/Services/behaviour-service.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent implements OnInit {

  constructor(private behaviour: BehaviourServiceService,
              private localS: LocalStorageService) { }

  ngOnInit() {
    // this.behaviour
    // .getSubscription$()
    // .subscribe(value => this.loggedInCustomer = value);

    this.loggedInCustomer= this.localS.getItem('loggedInCustomer');
  }

  loggedInCustomer: Customer;
  logger(){

  }

  logout(){
    this.localS.clear();
  }


}
