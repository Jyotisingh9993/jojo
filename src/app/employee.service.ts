import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Employee} from './employee'; 
import { Observable, observable } from 'rxjs';
@Injectable()
export class EmployeeService {
  url='http://localhost:65388/api/Emps'
  constructor(private http:HttpClient) { }
  getAllEmps():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }
  getEmplyoeeId(employeeId:String):Observable<Employee>{
    return this.http.get<Employee>(this.url+"/"+employeeId);
  }
  createEmplyoee(employee: Employee):Observable<Employee>{
    let httpHeaders = new HttpHeaders()
      .set('Content-Type','application/json');
    let options={
      headers:httpHeaders
    };
    return this.http.post<Employee>(this.url,employee,options)
  }
  // getAllEmplyoees():Observable<Employee[]>{
  //   return this.http.get<Employee[]>(this.url);
  // }

  UpdateEmplyoee(employee: Employee):Observable<Employee>{
    let httpHeaders = new HttpHeaders()
      .set('Content-Type','application/json');
    let options={
      headers:httpHeaders
    };
    return this.http.put<Employee>(this.url+"/"+employee.Id,employee,options)
  }
  DeleteeEmplyoee(employeeId:string):Observable<number>{
    let httpHeaders = new HttpHeaders()
      .set('Content-Type','application/json');
    let options={
      headers:httpHeaders
    };
    return this.http.delete<number>(this.url+"/"+employeeId)
  }





}
