import { environment } from './../../environments/environment';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from'rxjs/operators';
import { ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private Http: HttpClient) { }


  login(model:any)
  {
    return this.Http.post(this.baseUrl + 'User/LoginUser', model).pipe(
      map((response:User) => {
        const user = response;
        if(user)
        {
          console.log(user);
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }


  register(model:any)
  {
    console.log(model);
    return this.Http.post(this.baseUrl + 'User/RegisterUser',model).pipe(
      map((user: User) => {
        if(user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next();
        }
      })
    );
  }


  setCurrentUser(user:User)
  {
    this.currentUserSource.next(user);
  }


  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }


 


}
