import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  model: any={}
  

  constructor(private authService:AuthService,private router: Router,private toastr:ToastrService) { }

  ngOnInit() {

  }

  login()
  {
    this.authService.login(this.model).subscribe(response => {

      console.log(response);

      this.router.navigateByUrl('/');

    }, error => {
      console.log(error);
      this.toastr.error('Login Failed');
    })
  }

}
