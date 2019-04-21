import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import {SignupRequest} from '../Models/signup-request';
import {User} from '../Models/user';
import {ForgotPasswordRequest, ResetPasswordRequest} from "../Models/forgot-password-request";
@Injectable()
export class ForgotPasswordService{
  fpUrl: string;
  fpResourceURL: string;
  rpUrl: string;
  rpResourceUrl: string;

  /**
   * Constructor.
   */
  constructor(private http: HttpClient) {
    this.fpUrl = 'auth/forgot_password';
    this.fpResourceURL = `${environment.serverBaseURL}`+`${this.fpUrl}`;
    this.rpUrl = 'auth/reset_password';
    this.rpResourceUrl = `${environment.serverBaseURL}`+`${this.rpUrl}`;
  }

  /**
   * Sign up
   *
   * @param  {SignupRequest} signUpRequest: SignupRequest {signUpRequest with username, password, email, phoneno, firstname, lastname}
   * @return {Observable<User>} {Observable for saved user object}
   */
  forgotPassword(forgotPasswordRequest: ForgotPasswordRequest): Observable<User> {
    return this.http.put<User>(this.fpResourceURL, forgotPasswordRequest);
  }

  resetPassword(resetPasswordRequest: ResetPasswordRequest): Observable<User> {
    return this.http.put<User>(this.rpResourceUrl, resetPasswordRequest);
  }
}
