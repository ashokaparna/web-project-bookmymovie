import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {loginRequest} from '../Models/user';
import {LoginService} from '../Services/login.service';
import {CookieService} from "ngx-cookie-service";

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
  constructor(private lg: LoginService, private cookieService: CookieService ) {
    this.loginService = lg;
  }
// constructor(){}
  ngOnInit() {
  }

  /*Submit button click function. This will check if the entered elements are valid. If they are valid it will post the contact.*/
  authenticate() {
    this.request.UserName = this.username;
    this.request.Password = this.password;
    this.loginService.login(this.request)
      .subscribe((result: any) => {
        this.cookieService.set( 'UserDetails', JSON.stringify(result) );
        this.cookievalue = this.cookieService.get('UserDetails');
        console.log(this.cookievalue);
          alert(result.message);
        console.log(this.cookieService.get('UserDetails'));
    }, (error: any) => {
        console.log(error);
      });

  }
}
