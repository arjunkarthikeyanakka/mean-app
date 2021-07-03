import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import {Router} from '@angular/router'
import {Form} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  OnLogin(cred:any){
    this.us.loginuser(cred).subscribe(
      res=>{
        console.log(res.message,cred)
        if(res.message==="login successful"){
          alert("login successfull");
          localStorage.setItem("token",res.token);
          localStorage.setItem("username",res.username);
          localStorage.setItem("user-object",JSON.stringify(res.userObj));
          //navigate to user profile
          this.router.navigateByUrl("/userprofile");
        }
        else{
          alert(res.message);
        }
      },
      err=>{
        console.log("error in logging in : ",err);
      }
    )
  }

}
