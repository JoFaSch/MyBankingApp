import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/Customer';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { Account } from 'src/app/Models/Account';
import { RestServiceService } from 'src/app/Services/rest-service.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {
  
  loggedInUser: Customer;
  chosenAcc;
  showingAcc;

  constructor(private localS: LocalStorageService,
              private resti: RestServiceService) { }

  ngOnInit() {
    this.loggedInUser = this.localS.getItem('loggedInUser');
  }




  showAcc(){
    this.resti.getAccount(this.chosenAcc).subscribe(v => this.showingAcc = v);
  }


}
