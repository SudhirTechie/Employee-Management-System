import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './_components/add-employee/add-employee.component';
import { EmployeedetailsComponent } from './_components/employeedetails/employeedetails.component';
import { ListEmployeeComponent } from './_components/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './_components/update-employee/update-employee.component';

const routes: Routes = [
  {path:'',redirectTo:'/addEmployee',pathMatch:'full'},
  {path:'addEmployee',component:AddEmployeeComponent},
  {path:'update',component:UpdateEmployeeComponent},
  {path:'employee',component:ListEmployeeComponent},
  {path:'employee/:id',component:EmployeedetailsComponent},
  {path:'**',redirectTo:'/addEmployee',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
