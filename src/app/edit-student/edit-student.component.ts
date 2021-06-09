import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppComponent } from '../app.component';
import { ResponseAddStudent, ResponseEditStudent } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  // emailFormControl = new FormControl();

  emailFormControl = new FormControl(null, [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl(null, Validators.required);
  telFormControl = new FormControl(null, Validators.required);

  editStudentFormGroup = new FormGroup({
    id: new FormControl(),
    version: new FormControl(),
    email: this.emailFormControl,
    name: this.nameFormControl,
    tel: this.telFormControl,
  });

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private appComponent: AppComponent,
    private studentService: StudentService
  ) {
    const student = this.appComponent.editStudent;
    if (student) {
      // this.nameFormControl.setValue(student.name);
      // this.emailFormControl.setValue(student.email);
      // this.telFormControl.setValue(student.tel);
      // student = {name:'sdfswfsdf', tel:'wefewfwe',email:'2323f23f',id:234}
      this.editStudentFormGroup.patchValue(student);
    }
  }

  ngOnInit(): void {}

  saveStudent() {
    // console.log(this.addStudentFormGroup.value)
    const student = this.editStudentFormGroup.value;
    // {name:'', tel:'', email:''}

    this.studentService.editStudent(student).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'บันทึกสำเร็จแล้วววว',
        });

        this.editStudentFormGroup
        .patchValue({version:response.result.version})
        // this.router.navigateByUrl('/student');
        //  this.router.navigate(['/student']);
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.statusText,
        });
      }
    );
  }

  resetStudent() {
    this.editStudentFormGroup.reset();
  }
}
