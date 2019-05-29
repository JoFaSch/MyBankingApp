import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-faq-view',
  templateUrl: './faq-view.component.html',
  styleUrls: ['./faq-view.component.css']
})
export class FaqViewComponent implements OnInit {

  loggedInUser;

  constructor(private localS: LocalStorageService) { }

  ngOnInit() {
    this.loggedInUser = this.localS.getItem('loggedInUser');
  }

}
