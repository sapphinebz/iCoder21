import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
})
export class ActionBarComponent implements OnInit {
  cost = 0;
  @Input() step = 1;
  @Input() notBelow = 0;
  @Input() notMore: null | number = null;
  @Output() numberChange = new EventEmitter();
  @Input() set number(value: number) {
    this.cost = value;
  }

  get number() {
    return this.cost;
  }

  // getNumber(){
  //   return this.cost;
  // }

  // _componentName = 'action-bar';
  // get componentName(){
  //   return this._componentName;
  // }

  // set componentName(value: string){
  //   this._componentName = value;
  // }

  constructor() {}

  ngOnInit(): void {
    this.cost = this.number;
    // this.cost = this.getNumber()
    // console.log(this.componentName);
    // this.componentName = 'none';
  }

 

  decrease() {
    if (this.cost - this.step >= this.notBelow) {
      this.cost = this.cost - this.step;
    }
    this.numberChange.emit(this.cost);
  }

  increase() {
    if (this.notMore === null) {
      this.cost = this.cost + this.step;
    } else if (this.cost + this.step <= this.notMore) {
      this.cost = this.cost + this.step;
    }
    this.numberChange.emit(this.cost);
  }
}
