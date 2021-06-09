import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StudentModel } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  employee = {
    name: 'Boppin',
    code: 'Code'
  };
  fiveBahtList = [4, 10,8,20,50];
  oneBahtList: number[] = [];
  summary = 0;

  editStudent: StudentModel| null = null;



  ngOnInit(): void {

  }

  transform5BahtToBaht(){
    this.oneBahtList = this.fiveBahtList.map(num=>{
      return num*5
    })
  }

  sum(){
    // let sumCost = 0;
    // for (let index = 0; index < this.fiveBahtList.length; index++) {
    //   sumCost = sumCost +  this.fiveBahtList[index]*5
    // }
    // this.summary = sumCost;

    // โจทย์ใหม่ 
    // fiveBahtList = [4, 10,8,20,50];


    // fiveBahtList = [4, 10,8];

    this.summary = this.fiveBahtList.reduce((sumCost,num)=>{
      // sumCost = 0 num = 4   return 0+4*5
      // sumCost = 20 num = 10   return 20 + 10*5
      // sumCost = 70 num = 8   return 70 + 8*5  
      return sumCost + num*5  
    }, 0)
  }
 
}
