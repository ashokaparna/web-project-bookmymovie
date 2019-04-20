import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {loginRequest} from '../Models/user';
import {LoginService} from '../Services/login.service';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  cookievalue = 'unknown';
  request: loginRequest = new loginRequest();
  loginService: LoginService;
  constructor(private lg: LoginService, private cookieService: CookieService, private router: Router) {
    this.loginService = lg;
  }
// constructor(){}
  ngOnInit() {
  }

  /*Submit button click function. This will check if the entered elements are valid. If they are valid it will post the contact.*/
  authenticate() {
    this.request.username = this.username;
    this.request.password = this.password;
    this.loginService.login(this.request)
      .subscribe((result: any) => {
        this.cookieService.set( 'UserDetails', JSON.stringify(result) );
        this.cookievalue = this.cookieService.get('UserDetails');
        alert(result.message)
        this.router.navigate(['/dashboard', 2]);
    }, (error: any) => {
        console.log(error);
      });

  }
}
