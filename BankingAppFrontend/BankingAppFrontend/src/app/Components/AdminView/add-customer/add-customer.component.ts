import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/Customer';
import { RestServiceService } from 'src/app/Services/rest-service.service';
import { Adress } from 'src/app/Models/Adress';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  
  firstName: string;
  lastName: string;
  mailAddress: string;
  street: string;
  houseNumber: number;
  zip: string;
  city: string;

  constructor(private rest: RestServiceService) { }

  ngOnInit() {
  }



  newRandomCustomer(){
    var c1 = new Customer();
    this.rest.postCustomer(c1).subscribe();
    
  }

  newSpecifiedCustomer(){
    var c2 = new Customer()
    
    c2.firstName= this.firstName;
    c2.lastName = this.lastName;
    
    c2.adress= new Adress();
    c2.adress.city = this.city;
    c2.adress.zip = this.zip;
    c2.adress.houseNr =this. houseNumber;
    c2.adress.street = this.street;

    this.rest.postCustomer(c2).subscribe();
  }




}
