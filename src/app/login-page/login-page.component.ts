import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee, loginEmployee } from '../model/Employe';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userservice: UserserviceService, private router: Router,
    private toaster: ToastrService) { }
  loginform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
  }

  loginSubmit(_data: any) {
    let loginemploye: loginEmployee = {
      "username": _data.username,
      "password": _data.password
    }
    console.log(loginemploye);
    this.userservice.addlogin(_data).subscribe((res) => {
      if (res.data.success) {
        // alert("Login successfull !..")
        this.toaster.success("Login successfull !..")
        this.router.navigate(['dashboard'])
        console.log(res.tokenDetails);
        localStorage.setItem('token', res.tokenDetails.access_token)
      } else {
        // alert("username and password is incorrect")
        this.toaster.error("username and password is incorrect")
      }
    })

  }

  get username(): FormControl {
    return this.loginform.get("username") as FormControl
  }
  get password(): FormControl {
    return this.loginform.get("password") as FormControl
  }

 
}
