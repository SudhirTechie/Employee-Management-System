import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  firstName:string ='';
  lastName:string ='';
  email:string='';
  employeeForm:any;
  user:any;

  constructor(private employeeService:EmployeeService,private router:Router,private notificationService:NotificationService) { }

  ngOnInit(): void {
    this.user={
      firstName:'Sudhhir'
    }
  }

  addEmployee(data:NgForm){
    this.employeeService.addEmployee(data.value).subscribe(data=>{
      this.notificationService.showSuccess('Employee created successfully');
      this.gotoList();

    })
  }

  gotoList(){
    this.router.navigate(['/employee']);
  }

  showToasterSuccess(){
    this.notificationService.showSuccess("Data shown successfully !!")
}

}
