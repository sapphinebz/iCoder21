import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseAddStudent, ResponseEditStudent, ResponseStudentAll } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudentAll(condition: { name?: string; email?: string; tel?: string }) {
    const httpParams = new HttpParams({ fromObject: condition as any });
    // ?name=123&email=12312&tel=3123123
    return this.http.get<ResponseStudentAll>('/training-demo/student/all', {
      params: httpParams,
    });
  }

  deleteStudent(id: number){
    return this.http.delete(`/training-demo/student/${id}`)
  }

  editStudent(student: {name?:string, tel?:string, email?:string,version:number,id: number}){
    return this.http.put<ResponseEditStudent>('/training-demo/student', student)
  }

  addStudent(student: {name?: string, tel?:string, email?:string}){
    return this.http.post<ResponseAddStudent>('/training-demo/student', student)
  }
}
