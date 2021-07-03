import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from '../user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private hc:HttpClient,private us:UserService,private router:Router) { }

  ngOnInit(){

  }

   registerData(regData:any){
    console.log(regData);
     this.us.createUser(regData).subscribe(
       res=>{
         console.log("inside subscribe",res.message)
         if(res.message==="new user is added to the userlist..."){
           alert("account created successfuly");
           //now navigate to login component
           this.router.navigateByUrl("/login");
         }
         else{
           alert(res.message);
         }
       }
       ,
     err=>{
      console.log("error in creating user is : ",err);
    })
}}