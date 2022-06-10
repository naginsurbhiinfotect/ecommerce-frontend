import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userdata = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    contact: new FormControl(""),
  });



  constructor(private route: Router, private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void { }
  login() {
    this.route.navigate(["/login"])
  }
  onsubmit(userdata: FormGroup) {
    this.userservice.signup(userdata).subscribe((res) => {
      console.log(res)
    })
  }

}
