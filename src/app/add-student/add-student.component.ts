import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ResponseAddStudent } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],

})
export class AddStudentComponent implements OnInit {
  // emailFormControl = new FormControl();

  emailFormControl = new FormControl(null, [Validators.required, Validators.email]);
  nameFormControl = new FormControl(null,Validators.required);
  telFormControl = new FormControl(null,Validators.required)

  addStudentFormGroup = new FormGroup({
    email: this.emailFormControl,
    name: this.nameFormControl,
    tel: this.telFormControl,
  });

  constructor(
    private http: HttpClient, 
    private messageService: MessageService,
    private router:Router,
    private studentService: StudentService
    ) {}

  ngOnInit(): void {}

  saveStudent() {
    // console.log(this.addStudentFormGroup.value)
    const student = this.addStudentFormGroup.value;
    // {name:'', tel:'', email:''}

    this.studentService.addStudent(student)
    .subscribe(response=>{
      this.messageService.add({severity:'success', summary: 'Success', detail: 'บันทึกสำเร็จแล้วววว'});
      // this.router.navigateByUrl('/student');
      this.router.navigate(['/student']);

    })
  }

  resetStudent(){
    this.addStudentFormGroup.reset();
  }
}
