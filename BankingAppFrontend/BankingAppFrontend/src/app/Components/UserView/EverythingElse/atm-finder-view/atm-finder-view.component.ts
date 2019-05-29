import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-atm-finder-view',
  templateUrl: './atm-finder-view.component.html',
  styleUrls: ['./atm-finder-view.component.css']
})
export class AtmFinderViewComponent implements OnInit {

  loggedInUser;

  constructor(private localS: LocalStorageService) { }

  ngOnInit() {
    this.loggedInUser = this.localS.getItem('loggedInUser');
  }
  
}
