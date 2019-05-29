import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestServiceService } from 'src/app/Services/rest-service.service';
import { Customer } from 'src/app/Models/Customer';
import { BehaviourServiceService } from 'src/app/Services/behaviour-service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private rest:RestServiceService, 
              private behaviour: BehaviourServiceService,
              private router: Router,
              private localS: LocalStorageService) { }

  ngOnInit() {


  }

  login: number;
  password: string;

  loggedInCustomer: Customer;

  lastLogin;

  

  logIn(){
    var user: Customer;
    this.rest.getCustomer(this.login).subscribe(v => { 
      user = v;
      if(user.password == this.password){
        if(user.date){
          this.lastLogin=user.date;
        }
        this.loggedInCustomer = user;
        alert('Welcome ' + this.loggedInCustomer.firstName + '!');
        this.behaviour.emitValue(user);
        this.localS.setItem('loggedInUser', user);
        this.router.navigate(['/customerOverview']);
        this.rest.putCustomer(this.loggedInCustomer).subscribe();
      }
      })
  }


}
