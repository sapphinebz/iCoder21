import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EMPTY } from 'rxjs';
import { AppComponent } from '../app.component';
import { ResponseStudentAll, Student, StudentAllCondition, StudentModel } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  // name: string = 'Boppin'
  // student: Student  = {
  //   name: '12123',
  //   tel: '234234',
  //   email:'234234234',  
  // };
  // students: Student[] = [
  //   {
  //   name: 'BoppinCode'
  //   ,email:'sapphinebz@gmail.com'
  //   ,tel:'x0111-3453'
  //   },
  //   {
  //   name: 'BoppinCode'
  //   ,email:'sapphinebz@gmail.com'
  //   ,tel:'x0111-3453'
  //   },
  //   {
  //   name: 'BoppinCode'
  //   ,email:'sapphinebz@gmail.com'
  //   ,tel:'x0111-3453'
  //   },
  //   {
  //   name: 'BoppinCode'
  //   ,email:'sapphinebz@gmail.com'
  //   ,tel:'x0111-3453'
  //   },
  //   {
  //   name: 'BoppinCode'
  //   ,email:'sapphinebz@gmail.com'
  //   ,tel:'x0111-3453'
  //   },
  //   {
  //   name: 'BoppinCode'
  //   ,email:'sapphinebz@gmail.com'
  //   ,tel:'x0111-3453'
  //   }
  // ]

  studentModels:  StudentModel[] = []

  nameFormControl = new FormControl()
  emailFormControl = new FormControl()
  telFormControl = new FormControl()

  studentConditionFormGroup = new FormGroup({
    name: this.nameFormControl,
    email: this.emailFormControl,
    tel: this.telFormControl
  })

  

  constructor(private http: HttpClient,   
    private messageService: MessageService,
    private router: Router,
    private appComponent: AppComponent
    ) { 

  
  }

  clearStudent(){
    this.studentModels = []
    // this.nameFormControl.reset();
    // this.emailFormControl.reset();
    // this.telFormControl.reset();
    this.studentConditionFormGroup.reset();
  }

  ngOnInit(): void {
  }

  queryStudent(){
    // console.log(this.nameFormControl.value)
    // console.log(this.emailFormControl.value)
    // console.log(this.telFormControl.value)

    const name = this.nameFormControl.value;
    const email = this.emailFormControl.value;
    const tel = this.telFormControl.value;

    // console.log(this.studentConditionFormGroup.value)

    const condition:StudentAllCondition = {};

    
    if(name){
      condition.name = name;
    }
    if(email){
      condition.email = email;
    }
    if(tel){
      condition.tel = tel;
    }

    //condition =  {name: '123', email:'12312', tel:'3123123'}
    
    const httpParams = new HttpParams({fromObject:(condition as any)});
    // ?name=123&email=12312&tel=3123123
    this.http.get<ResponseStudentAll>('/training-demo/student/all',{
      params: httpParams
    })
    .subscribe(
      
      response=>{
          this.studentModels = response.result
      },
      (error: HttpErrorResponse)=>{
        this.messageService
        .add({
          severity:'error', 
          summary: 'Error', 
          detail: error.statusText
        });

        this.studentModels =[];
      }
    ); 

    
  
  }

  deleteStudent(student: StudentModel){
    // this.http.delete('/training-demo/student/'+student.id);
    this.http.delete(`/training-demo/student/${student.id}`)
    .subscribe(response=>{
      this.messageService
      .add({severity:'success',
       summary: 'Success', 
      detail: 'ลบสำเร็จแล้วววว'});

      const index = this.studentModels
      .findIndex(model=>model.id===student.id)
      
      if(index>=0){
        this.studentModels.splice(index,1);
      }
      // this.queryStudent();
    })
  }

  editStudent(student: StudentModel){
    this.appComponent.editStudent = student;
    this.router.navigate(['/edit'])
  }
 

}
