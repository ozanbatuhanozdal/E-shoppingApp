import { Member } from './../../Models/member';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersService } from 'src/app/Services/members.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild('editForm') editForm:NgForm
  member: Member
  id: string
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event:any)
  {
    if(this.editForm.dirty)
    {
      $event.returnValue = true
    }
  }
  constructor(private membersService: MembersService,private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
     this.id = this.route.snapshot.paramMap.get('id')
    
    this.getUser()
  }


 
  getUser()
  {    
   this.membersService.getUserById(this.id).subscribe( member => {
     console.log(member)
     this.member = member;
   })
  }

  updateUser()
  {
    console.log(this.member);
    this.membersService.updateMember(this.member).subscribe(() => {
      this.toastr.success('Profile updated succesfully');
      this.editForm.reset(this.member);
    })
  }

}
