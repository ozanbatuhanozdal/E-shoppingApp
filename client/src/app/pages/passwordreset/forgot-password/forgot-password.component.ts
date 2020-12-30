import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  model: any={}
  

  constructor(private authService:AuthService,private router: Router,private toastr:ToastrService) { }

  ngOnInit() {

  }

  forgotPassword()
  {
    this.authService.ForgotPassword(this.model).subscribe(response => {

        this.toastr.error('Password Change Link Sended url');

    }, error => {
      console.log(error);
      this.toastr.success('Email Url SEnded to ur url ');
      this.model = [];
    })
  }

}
