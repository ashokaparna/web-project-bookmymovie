import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import {SignupRequest} from '../Models/signup-request';
import {User} from '../Models/user';
import {ForgotPasswordRequest} from "../Models/forgot-password-request";
@Injectable()
export class ForgotPasswordService{
  fpUrl: string;
  fpResourceURL: string;

  /**
   * Constructor.
   */
  constructor(private http: HttpClient) {
    this.fpUrl = 'auth/forgot_password';
    this.fpResourceURL = `${environment.serverBaseURL}${this.fpUrl}`;
  }

  /**
   * Sign up
   *
   * @param  {SignupRequest} signUpRequest: SignupRequest {signUpRequest with username, password, email, phoneno, firstname, lastname}
   * @return {Observable<User>} {Observable for saved user object}
   */
  forgotPassword(forgotPasswordRequest: ForgotPasswordRequest): Observable<User> {
    return this.http.post<User>(this.fpResourceURL, forgotPasswordRequest);
  }
}
