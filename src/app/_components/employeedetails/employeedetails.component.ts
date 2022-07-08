import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employeeDetail:any;

  constructor(private activatedRoute:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.employeeDetails();
  }

  employeeDetails(){
    let id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
     this.employeeService.getEmployee(id).subscribe((res:any)=>{
      this.employeeDetail = res;
    })


  }

  updateEmp(myForm:any){
    console.log(myForm.value);
   // this.employeeService.update

  }

}
