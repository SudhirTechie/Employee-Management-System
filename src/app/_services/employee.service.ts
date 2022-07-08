import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
   private baseurl = "http://localhost:8090/api/sudhir/employees";
  addEmployee(data:any){
    return this.http.post(this.baseurl,data);
  }

  getEmployee(id:number){
    return this.http.get(`${this.baseurl}/${id}`);
  }
  getAllEmployee(){
    return this.http.get(`${this.baseurl}/getEmployee`);
  }

  deleteEmployee(id:number){
    return this.http.delete(`${this.baseurl}/${id}`);
  }

  // updateEmployee(id:number){
  //   return this.http.put(`${this.baseurl}`)
  // }

  
}
