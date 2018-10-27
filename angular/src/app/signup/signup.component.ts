import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  msg:string
  constructor(private router: Router,private auth: SignupService) { }
  
  
  ngOnInit() {
  }

  onSubmit(event) {
    const target = event.target
    const username = target.querySelector("#username").value
    const password = target.querySelector("#password").value
    const email = target.querySelector("#email").value
    const phone_no = target.querySelector("#phone_no").value
    console.log(username, password)
    this.auth.postuser({
      username: username,
      password: password,
      email:email,
      phone_no:phone_no
    }).subscribe(data => {
      this.msg = data['msg'];
      if (data['status']) {
        console.log('hello');
        console.log(data);
        this.router.navigate(['/login']);
      }
    })
  
  }

}
