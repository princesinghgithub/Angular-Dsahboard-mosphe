import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/model/Employe';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  users: any;
  userstats: any;
  getusers: any
  constructor(private userservice: UserserviceService,
    private toaster: ToastrService) {
    this.userservice.getUsers().subscribe((data: any) => {
      this.users = data
    })
    this.userservice.getUserstatus().subscribe((result: any) => {
      this.userstats = result
    })
    this.userservice.getAllstatus().subscribe((result: any) => {
      this.getusers = result
    })
  }
  // 
  regForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z].*')]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z].*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
    companyId: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
    plans: new FormControl('', [Validators.required]),
    statusId: new FormControl('', [Validators.required]),
    addressId: new FormControl('', [Validators.required])

  })
  ngOnInit(): void {
  }
  registerSubmit(data: any) {
    let employee: Employee = {
      "roleId": +data.roleId,
      "statusId": +data.statusId,
      "addressId":+data.addressId,
      "firstName": data.firstName,
      "lastName": data.lastName,
      "email": data.email,
      "password": data.password,
      "phone": data.phone,
      "companyId": +data.companyId,
      "country": data.country,
      "plans": +data.plans
    }
    console.log(employee);
    this.userservice.addUser(employee).subscribe((result) => {
      console.log(result);
      localStorage.setItem('token',result.token)
    })
  }
  get firstName(): FormControl {
    return this.regForm.get("firstName") as FormControl
  }
  get lastName(): FormControl {
    return this.regForm.get("lastName") as FormControl
  }
  get email(): FormControl {
    return this.regForm.get("email") as FormControl
  }
  get password(): FormControl {
    return this.regForm.get("password") as FormControl
  }
  get phone(): FormControl {
    return this.regForm.get("phone") as FormControl
  }
  get companyId(): FormControl {
    return this.regForm.get("companyId") as FormControl
  }
  get country(): FormControl {
    return this.regForm.get("country") as FormControl
  }
  get roleId(): FormControl {
    return this.regForm.get("roleId") as FormControl
  }
  get plans(): FormControl {
    return this.regForm.get("plans") as FormControl
  }
  get statusId(): FormControl {
    return this.regForm.get("statusId") as FormControl
  }

  // toster
  showtoaster() {
    this.toaster.success('Register Form  is successful')
  }
}
