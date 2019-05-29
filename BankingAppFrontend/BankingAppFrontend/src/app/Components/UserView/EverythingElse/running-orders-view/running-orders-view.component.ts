import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-running-orders-view',
  templateUrl: './running-orders-view.component.html',
  styleUrls: ['./running-orders-view.component.css']
})
export class RunningOrdersViewComponent implements OnInit {

  loggedInUser;

  constructor(private localS: LocalStorageService) { }

  ngOnInit() {
    this.loggedInUser = this.localS.getItem('loggedInUser');
  }

}
