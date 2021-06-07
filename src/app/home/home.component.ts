import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result = 0;
  actionBarNumber1 = 0;
  actionBarNumber2 = 10;
  actionBarNumber3 = 200;
  constructor() { }
  
  ngOnInit(): void {
    this.sumResult();
  }
  sumResult() {
    this.result =
      this.actionBarNumber1 + this.actionBarNumber2 + this.actionBarNumber3;
  }
}
