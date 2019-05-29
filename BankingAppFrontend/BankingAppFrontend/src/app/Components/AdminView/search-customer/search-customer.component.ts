import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/Services/rest-service.service';
import { Customer } from 'src/app/Models/Customer';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  lastName: string;
  customerObject;

  constructor(private resti:RestServiceService) { }

  ngOnInit() {
  }

  search(){
    this.resti.getCustomerByLastName(this.lastName).subscribe(v => this.customerObject=v);
  }

  delete(id: number){
    this.resti.deleteCustomer(id);
    console.log('lauft');
    console.log(id);
  }

}
