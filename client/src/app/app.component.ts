import { AuthService } from './Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-shopping App';
  headerFooter;
  users:any;

  constructor(private router: Router,private http: HttpClient,private authService : AuthService){}


  ngOnInit()
  { this.router.events
  .subscribe((event) => {
    if(event instanceof NavigationEnd){
      this.headerFooter = (event.url !== '/login' && event.url !== '/register' )
    }

  }) 
   
   this.setCurrentUser();
}


 

    setCurrentUser()
    {
      const user: User = JSON.parse(localStorage.getItem('user'));
      this.authService.setCurrentUser(user);
    }

  }



