import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }

  user: string;
  password: string;
  showHide: boolean = true;

  login(){
    if(this.user=='admin' && this.password=='admin'){
      this.showHide=false;
    }else{
      alert('Wrong login XOR password!')
    }
  }

}
