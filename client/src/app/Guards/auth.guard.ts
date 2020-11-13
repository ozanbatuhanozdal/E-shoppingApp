import { AuthService } from '../Services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private toastr: ToastrService){

    
  }

  canActivate(): Observable<boolean>  {
    return this.authService.currentUser$.pipe( 
      map(user => {
        if(user) return true;

        this.toastr.error('You shall not pass')
      })
    )
    
  }
  
}
