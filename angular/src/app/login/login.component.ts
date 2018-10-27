import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string 
  constructor(private router: Router, private auth: SignupService) { }

  onSubmit(event) {
    const target = event.target
    
    const username = target.querySelector("#username").value
    const password = target.querySelector("#password").value
    console.log(username, password)
    this.auth.authenticate({
      username: username,
      password: password
    }).subscribe(data => {
      this.msg = data['msg'];
      if (data['status']) {
        console.log('hello');
        console.log(data);
        this.router.navigate(['/home']);
      }
    })
  }

  ngOnInit() {
    
  }

}
