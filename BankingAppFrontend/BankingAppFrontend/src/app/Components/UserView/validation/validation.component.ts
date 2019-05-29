import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/Customer';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  loggedInUser: Customer;

  constructor(private localS: LocalStorageService) { }

  ngOnInit() {
    this.loggedInUser = this.localS.getItem('loggedInUser');
  }

}
