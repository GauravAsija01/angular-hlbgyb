import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  private getURL(url){
    return "http://localhost:3000/" + url;
  }

  addUsers(body){
    console.log(body);
    return this.http.post(this.getURL('usersdata'), body);

  }
}
