import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employeeList:any;
  employee:any;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getAllEmployee().subscribe((data:any)=>{
      this.employee = data;
    });

  }

}
