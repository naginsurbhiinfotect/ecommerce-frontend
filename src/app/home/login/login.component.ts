import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  })
  email: any;
  password: any;
  _id: string = '';
  userdata: any;
  constructor(private route: Router, private userservice: UserService) { }

  ngOnInit(): void {
  }
  onsubmit() {
    this.userservice.signin(this.email, this.password).subscribe((res) => {
      const { data: { _id, } } = res;
      this.logForm.reset();
      // localStorage.setItem("id", res.data._id);
    })
  }

  loginFormDataHandler(e: any, type: string) {
    if (type === 'email') {
      this.email = e.target.value;
    } else {
      this.password = e.target.value;
    }
  }
  signup() {
    this.route.navigate(["/signup"])
  }

  Password() {
    this.route.navigate(["/forgotpassword"])
  }

  userById(_id: any) {
    this.userservice.userById().subscribe((res) => {
      this.userdata = res.users
      localStorage.getItem("id")

    })
  }
}


