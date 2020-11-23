import { environment } from './../../environments/environment';
import { Member } from './../Models/member';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Member[];
  baseUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Member[]>(this.baseUrl + 'User/GetAll')
  }
}