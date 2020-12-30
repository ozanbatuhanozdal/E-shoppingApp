import { MembersService } from './../../../Services/members.service';
import { User } from './../../../Models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Member } from 'src/app/Models/member';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {


  id:string
  member: Member

  constructor(private route: ActivatedRoute,private memberService: MembersService,private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);
    this.getUserWithGuid()
  }


  getUserWithGuid()
  {
    this.memberService.GetUserWithGuid(this.id).subscribe( member => {
      console.log(member)
      this.member = member;
    })
  }


  updateUser()
  {
    console.log(this.member);
    this.memberService.updateMember(this.member).subscribe(() => {
      this.toastr.success('Profile updated succesfully');   
      this.router.navigateByUrl('/login');   
    })
  }



}
