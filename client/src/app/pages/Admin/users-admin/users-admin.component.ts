import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../../Services/users.service';
import { Member } from '../../../Models/member'
@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

  constructor(private userService: UsersService,) { }
  Users: Member[];
  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this.userService.getUsers().subscribe( user => {
      console.log(user);
      this.Users = user;                
    })
  }

}
