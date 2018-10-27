import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
interface User {
  username: string;
  password: string;
  email: string;
  phone_no: Number;
}
interface User1 {
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  uri = "http://localhost:4000";
  constructor(private http: HttpClient) { }
  postuser(user: User) {
    return this.http.post('http://localhost:4000/postuser', user, { responseType: 'json' });
  }
  authenticate(user: User1) {
    return this.http.post('http://localhost:4000/login', user, { responseType: 'json' });
   }
  
}
