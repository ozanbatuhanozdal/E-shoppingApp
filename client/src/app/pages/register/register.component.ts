import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any = {};
  public barLabel: string = "Password strength:";  
  constructor(private http:HttpClient,private authService:AuthService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  register()
  {
    if(this.model.password ==this.model.checkpassword)
    {
      this.authService.register(this.model).subscribe(response => {
        console.log(response);
        this.router.navigateByUrl('/');
      },error => {
        console.log(error);
        this.toastr.error("Register Failed, Check Your Inputs");
      })
    }
    else{
      this.toastr.error('Password And Check Password is not same')
    }
  }
}
