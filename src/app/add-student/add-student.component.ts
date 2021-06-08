import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers: [MessageService]
})
export class AddStudentComponent implements OnInit {
  // emailFormControl = new FormControl();
  addStudentFormGroup = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    tel: new FormControl(),
  });

  constructor(private http: HttpClient,private messageService: MessageService) {}

  ngOnInit(): void {}

  saveStudent() {
    // console.log(this.addStudentFormGroup.value)
    const student = this.addStudentFormGroup.value;

    this.http.post('/training-demo/student', student)
    .subscribe(response=>{
      // console.log('บันทึกสำเร็จ')
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    })
  }
}
