import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TimeseetComponent } from './timeseet/timeseet.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { TimesheetOneComponent } from './timesheet-one/timesheet-one.component';
import { RoleComponent } from './role/role.component';
const routes: Routes = [
    {
      path: '', component: NavigationComponent,
      children: [
        {
          path: 'dashboard', redirectTo: 'dashboard', pathMatch: 'full'
        },
        {
          path: 'dashboard', component: DashboardComponent,
          canActivate:[AuthGuard]
          
        },
        {
          path: 'timedashboard', component: TimeseetComponent
        },
        {
          path: 'login', component: LoginPageComponent
        },
        {
          path: 'timesheet1', component: TimesheetOneComponent
        },
        {
          path: 'role', component: RoleComponent
        },
      ]
    },
  
    {
      path: 'signup', component: RegistrationComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
