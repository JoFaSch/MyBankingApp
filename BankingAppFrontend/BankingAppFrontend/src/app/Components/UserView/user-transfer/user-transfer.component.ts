import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { Customer } from 'src/app/Models/Customer';
import { UpdateAccountRQ } from 'src/app/Models/UpdateAccountRQ';
import { RestServiceService } from 'src/app/Services/rest-service.service';
import { Iban } from 'src/app/Models/Iban';
import { Account } from 'src/app/Models/Account';

@Component({
  selector: 'app-user-transfer',
  templateUrl: './user-transfer.component.html',
  styleUrls: ['./user-transfer.component.css']
})
export class UserTransferComponent implements OnInit {

  constructor(private local: LocalStorageService,
              private rest: RestServiceService) { }

  loggedInUser: Customer;

  payeeIban: string;
  amount: number;
  reference: string;

  iban1;

  ngOnInit() {
    this.loggedInUser = this.local.getItem('loggedInUser');
  }

  transfer(){
    const request = new UpdateAccountRQ(this.iban1, this.payeeIban, this.amount, this.reference);
    this.rest.transferMoney(request).subscribe();
    // ohne reload bleibt der "Hintergrund" vom Modal und blockt den Screen 
    window.location.reload();
  }
}
