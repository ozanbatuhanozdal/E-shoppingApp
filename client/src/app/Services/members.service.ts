import { Member } from './../Models/member';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  member: Member;

  baseUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getUserById(id:string)
  {                               
    return this.http.get<Member>(this.baseUrl + 'user/' +  id)
  }


  updateMember(member: Member)
  {
    return this.http.put(this.baseUrl + 'user',member);
  }
  
}
