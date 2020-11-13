import { Member } from './../../Models/member';
import { MembersService } from './../../Services/members.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  member: Member
  loggedIn:boolean;
  model: any ={}

  currentUser$: Observable<User>;


  constructor(public authService : AuthService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.currentUser$ = this.authService.currentUser$;
  }


  

  login()
  {
    this.authService.login(this.model).subscribe(response => {
      console.log(response);
    
    }, error => {
      console.log(error);
    })
  }

  logout()
  {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
