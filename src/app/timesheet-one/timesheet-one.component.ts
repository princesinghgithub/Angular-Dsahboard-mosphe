import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Company, Employee, Task } from 'src/app/model/Employe';
@Component({
  selector: 'app-timesheet-one',
  templateUrl: './timesheet-one.component.html',
  styleUrls: ['./timesheet-one.component.css']
})
export class TimesheetOneComponent implements OnInit {
  Companies: any
  onClose: any;
  IsmodelShow!: boolean;
  EditData: any;
  tasks: any
  constructor(private userservice: UserserviceService) {

  }
  // form validators
  addCompany = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    contact: new FormControl("", [Validators.required]),
    company: new FormControl("", [Validators.required]),
    addresss: new FormControl("", [Validators.required]),
    plans: new FormControl("", [Validators.required]),
    website_url: new FormControl("", [Validators.required]),
    status: new FormControl("", [Validators.required])
  })

  // ad task form
  addTask = new FormGroup({
    taskname: new FormControl("", [Validators.required]),
    taskrate: new FormControl("", [Validators.required]),
    status: new FormControl("", [Validators.required]),
  })
  // end form validation
  ngOnInit(): void {
    this.userservice.getAllstatus().subscribe((companyData) => {
      this.Companies = companyData.data
      console.log(companyData.data);
    })
    // gettask api
    this.userservice.getTask().subscribe((taskData) => {
      // debugger
      this.tasks = taskData.resposne;

      console.log(taskData);


    });
  }
  editCompany(data: any) {
    this.EditData = data
    if (this.EditData) {
      this.addCompany.controls['firstName'].setValue(this.EditData.firstname)
      this.addCompany.controls['lastName'].setValue(this.EditData.lastname)
      this.addCompany.controls['email'].setValue(this.EditData.email)
      this.addCompany.controls['contact'].setValue(this.EditData.contact)
      this.addCompany.controls['company'].setValue(this.EditData.company)
      this.addCompany.controls['website_url'].setValue(this.EditData.website_url)
      this.addCompany.controls['plans'].setValue(this.EditData.plans)
      this.addCompany.controls['addresss'].setValue(this.EditData.address)
    }
  }
  submitCompany(data: any) {
    let company: Company = {
      "userId": +0,
      "statusId": +data.status,
      "firstName": data.firstName,
      "lastName": data.lastName,
      "email": data.email,
      "contact": data.contact,
      "company": data.company,
      "website_url": data.website_url,
      "addresss": data.addresss,
      "plans": +data.plans,
      "billing": '',
      "imageurl": ''
    }
    console.log(company);
    this.userservice.addCompany(company).subscribe((result) => {
      console.log(result);
      this.userservice.getAllstatus().subscribe()
    })
  }
  submitTask(data: any) {
    let task: Task = {
      "id": + 0,
      "taskname": data.taskname,
      "taskrate": data.taskrate,
      "status": data.status,
      "billingid": + 0
    }
    console.log(task);
    this.userservice.addTask(task).subscribe((result) => {
      console.log(result);
      // this.userservice.getAllstatus().subscribe()
    })
  }
  updatCompany(data: any) {
    let company: Company = {
      "userId": +0,
      "statusId": +data.status,
      "firstName": data.firstName,
      "lastName": data.lastName,
      "email": data.email,
      "contact": data.contact,
      "company": data.company,
      "website_url": data.website_url,
      "addresss": data.addresss,
      "plans": +data.plans,
      "billing": '',
      "imageurl": ''
    }
    console.log(company);
    this.userservice.updateCompany(company).subscribe((result) => {
      console.log(result);
      this.userservice.getAllstatus().subscribe()
    })
  }
  // delete company
  deleteCompany(companyId: any) {
    this.userservice.deleteCompany(companyId).subscribe((res: any) => {
      this.userservice.getCompany().subscribe((data: any) => {
        this.Companies = data
      })
    })
  }



}


