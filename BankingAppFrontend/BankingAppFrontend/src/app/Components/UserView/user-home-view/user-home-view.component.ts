import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/Customer';
import { RestServiceService } from 'src/app/Services/rest-service.service';
import { timeout } from 'q';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-user-home-view',
  templateUrl: './user-home-view.component.html',
  styleUrls: ['./user-home-view.component.css']
})
export class UserHomeViewComponent implements OnInit {
  loggedInCustomer: Customer;

  constructor(private localS: LocalStorageService) { }

  ngOnInit() {
    this.loggedInCustomer = this.localS.getItem('loggedInUser');
  }

  


  onLogin(){
    
  }
}
