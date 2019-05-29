import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-products-and-information-view',
  templateUrl: './products-and-information-view.component.html',
  styleUrls: ['./products-and-information-view.component.css']
})
export class ProductsAndInformationViewComponent implements OnInit {

  loggedInUser;

  constructor(private localS: LocalStorageService) { }

  ngOnInit() {
    this.loggedInUser = this.localS.getItem('loggedInUser');
  }

}
