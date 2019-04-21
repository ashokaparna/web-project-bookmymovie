export class ForgotPasswordRequest {

  email: string;

}

export class ResetPasswordRequest{
  password: string;
  token: string;
  constructor(){

  }

}
