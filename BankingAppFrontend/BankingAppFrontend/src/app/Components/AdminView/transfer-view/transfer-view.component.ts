import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/Services/rest-service.service';
import { UpdateAccountRQ } from 'src/app/Models/UpdateAccountRQ';

@Component({
  selector: 'app-transfer-view',
  templateUrl: './transfer-view.component.html',
  styleUrls: ['./transfer-view.component.css']
})
export class TransferViewComponent implements OnInit {

  constructor(private rest: RestServiceService) { }

  ngOnInit() {
  }

  iban1: string;
  iban2: string;
  amount: number;
  reference: string;

  transfer(iban1: string, iban2: string, amount:number){
      var updateRQ = new UpdateAccountRQ(this.iban1, this.iban2, this.amount, this.reference);
      this.rest.transferMoney(updateRQ).subscribe();
  }

}
