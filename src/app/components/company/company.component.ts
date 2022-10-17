import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/Employe';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  Companies:any
  constructor( private userservice:UserserviceService ) {
    this.userservice.getCompany().subscribe((companyData)=>{
 this.Companies=companyData
    })
   }

  ngOnInit(): void {
  }

}
