import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
// import { Observable } from 'rxjs';
import { UserserviceService } from './services/userservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private userservice: UserserviceService,
  private router :Router){}

  canActivate(): boolean { 
    if(this.userservice.logedIn()){
      return true
    }else{
     !!this.router.navigate(['/login'])
      return false
    }
  }
  
}
