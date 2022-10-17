import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { UserserviceService } from './userservice.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector:Injector) { }

intercept(req: HttpRequest<any>, next: HttpHandler){
  let userservice=this.injector.get(UserserviceService)
  let tokenizedReq =req.clone({
    setHeaders:{
      Authorization:`Bearer ${userservice.getToken()}`
    }
  })
  return next.handle(tokenizedReq)
}

}
