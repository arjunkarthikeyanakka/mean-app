import { Component, OnInit } from '@angular/core';4
import {UserService} from '../user.service'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private us:UserService) { }

  ngOnInit(): void {
  }

}
