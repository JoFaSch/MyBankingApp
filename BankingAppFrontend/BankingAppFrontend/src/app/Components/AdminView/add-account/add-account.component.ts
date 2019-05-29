import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/Services/rest-service.service';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(private rest: RestServiceService) { }

  ngOnInit() {
  }

  customerId: number;
  accountName: string;

  add(){
    this.rest.addAccount(this.customerId, this.accountName).subscribe();
  }
}
