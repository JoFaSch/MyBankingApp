import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-mailbox-view',
  templateUrl: './mailbox-view.component.html',
  styleUrls: ['./mailbox-view.component.css']
})
export class MailboxViewComponent implements OnInit {

  loggedInUser;

  constructor(private localS: LocalStorageService) { }

  ngOnInit() {
    this.loggedInUser = this.localS.getItem('loggedInUser');
  }


}
