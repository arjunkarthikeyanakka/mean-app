import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {LoginComponent} from '../app/login/login.component';
import {RegisterComponent} from '../app/register/register.component'
import {UserprofileComponent} from '../app/userprofile/userprofile.component'
 
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'',redirectTo:'/register',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
