// {
//     name: 'BoppinCode'
//     ,email:'sapphinebz@gmail.com'
//     ,tel:'x0111-3453'
//     }

export interface Student {
  name: string;
  email: string;
  tel: string;
  createDate?: Date;
}

export interface ResponseStudentAll {
  result: StudentModel[];
}

export interface StudentModel {
  createBy?: any;
  createDate?: string;
  email: string;
  id: number;
  name: string;
  tel: string;
  updateBy?: any;
  updateDate?: string;
  version: number;
}

export interface StudentAllCondition {
  name?: string;
  email?: string;
  tel?: string;
}

export interface ResponseAddStudent {
  result: ResultAddStudent;
}

export interface ResultAddStudent {
  createBy?: any;
  createDate?: any;
  email: string;
  id: number;
  name: string;
  tel: string;
  updateBy?: any;
  updateDate?: any;
  version: number;
}


export interface ResponseEditStudent {
  result: ResultEditStudent;
}

export interface ResultEditStudent {
  createBy?: any;
  createDate?: any;
  email: string;
  id: number;
  name: string;
  tel: string;
  updateBy?: any;
  updateDate?: any;
  version: number;
}