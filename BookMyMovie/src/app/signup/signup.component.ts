import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignupRequest} from '../Models/signup-request';
import {SignUpService} from '../Services/sign-up.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  public signUpForm: FormGroup;
  submitted = false;
  request: SignupRequest = new SignupRequest();
  constructor(private  signUpService: SignUpService, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'phoneNo': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)

    });
  }
  get f() { return this.signUpForm.controls; }
  signUp(){
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.request.username = this.signUpForm.get('username').value;
    this.request.password = this.signUpForm.get('password').value;
    this.request.email = this.signUpForm.get('email').value;
    this.request.firstname = this.signUpForm.get('firstname').value;
    this.request.phoneNo = this.signUpForm.get('phoneNo').value;
    this.request.lastname = this.signUpForm.get('lastname').value;
    this.signUpService.signUp(this.request)
      .subscribe((result: any) => {
        this.cookieService.set( 'UserDetails', JSON.stringify(result) );
        alert(result.message);
        this.router.navigate(['/dashboard', 2]);
      }, (error: any) => {
        console.log(error);
      });
  }
}
