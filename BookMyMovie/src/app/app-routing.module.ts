import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MiddleDivComponent} from './middle-div/middle-div.component';
import {PaymentComponent} from './payment/payment.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ForgotpasswordComponent} from "./forgotpassword/forgotpassword.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: MiddleDivComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'payment',
    component: PaymentComponent,
    data: { title: 'Payment Form' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Payment Form' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Payment Form' }
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
    data: { title: 'Payment Form' }
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
