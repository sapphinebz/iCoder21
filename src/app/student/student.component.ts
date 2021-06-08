import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = [
    {
    name: 'BoppinCode'
    ,email:'sapphinebz@gmail.com'
    ,tel:'x0111-3453'
    },
    {
    name: 'BoppinCode'
    ,email:'sapphinebz@gmail.com'
    ,tel:'x0111-3453'
    },
    {
    name: 'BoppinCode'
    ,email:'sapphinebz@gmail.com'
    ,tel:'x0111-3453'
    },
    {
    name: 'BoppinCode'
    ,email:'sapphinebz@gmail.com'
    ,tel:'x0111-3453'
    },
    {
    name: 'BoppinCode'
    ,email:'sapphinebz@gmail.com'
    ,tel:'x0111-3453'
    },
    {
    name: 'BoppinCode'
    ,email:'sapphinebz@gmail.com'
    ,tel:'x0111-3453'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
