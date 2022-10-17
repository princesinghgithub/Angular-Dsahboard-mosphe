import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {  Company, Employee ,Task} from '../model/Employe';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
   httpOptions = { // this requierd for header api
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
url="http://tmsapi.techbench.net/api"

  constructor(private http:HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.url}/manageplans/get`,this.httpOptions).pipe(map(user => {
      return user
    })
    )
  }
// add user api 
addUser(data:Employee): Observable<any> {
  return this.http.post<any>(`${this.url}/manageuser/adduser`,JSON.stringify(data),this.httpOptions)
    .pipe(map(adduser => {
      return adduser;
    })
   )
}

addlogin(data:Employee):Observable<any>{
  return this.http.post<any>(`${this.url}/account/login`,JSON.stringify(data),this.httpOptions)
    .pipe(map(adduser => {
      return adduser;
    })
   )
}
logedIn(){
  return localStorage.getItem('token')
}
getToken(){
  return localStorage.getItem('token')
}
  getUserstatus(): Observable<any> {
    return this.http.get<any>(`${this.url}/manageplans/getstatus`,this.httpOptions).pipe(map(userstatus => {
      return userstatus;
    })
    )
  }
   getAllstatus(): Observable<any> {
    return this.http.get<any>(`${this.url}/managecompany/getall`,this.httpOptions).pipe(map(status => {
      return status
    }))
  }
//  get company
getCompany():Observable<any>{
return this.http.get<any>(`${this.url}/managecompany/getcompany`,this.httpOptions).pipe(map(status=>{
 return status
}))
}
addCompany(data:Company):Observable<any>{
  return this.http.post<any>(`${this.url}/managecompany/addcompany`,JSON.stringify(data),this.httpOptions).pipe(map(addCompany=>{
    return addCompany
  }))
}
updateCompany(data:Company):Observable<any>{
  debugger
return this.http.post<any>(`${this.url}/managecompany/updatecompany`,JSON.stringify(data),this.httpOptions).pipe(map(status=>{
  return status
}))
}
deleteCompany(companyId: any): Observable<any> {
  return this.http.post<any>(`${this.url}/managecompany/delete/${companyId}`, this.httpOptions).pipe(map(country => {
    return country
  })
  )
}

// task---------|
getTask():Observable<any>{
  return this.http.get<any>(`${this.url}/managetask/getall`,this.httpOptions).pipe(map(status=>{
    return status
  }))
}
addTask(data:Task):Observable<any>{
  return this.http.post<any>(`${this.url}/managetask/add`,JSON.stringify(data),this.httpOptions).pipe(map(addTask=>{
    return addTask
  }))
}
}
