import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FilterPipe} from './middle-div/filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselDivComponent } from './carousel-div/carousel-div.component';
import { MiddleDivComponent } from './middle-div/middle-div.component';
import { Order_Service } from './Services/order.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import {LoginService} from "./Services/login.service";
import {CookieService} from "ngx-cookie-service";
import{MovieService} from './Services/movie.service';

import { OrderHistoryComponent } from './order-history/order-history.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { SeatSelectionComponent } from './seat-selection/seat-selection.component';

import {SignUpService} from "./Services/sign-up.service";

import { CustomerReviewTemplateComponent } from './customer-review-template/customer-review-template.component';


import { MovieShowSelectComponent } from './movie-show-select/movie-show-select.component';
import { MovieSingleComponent } from './movie-single/movie-single.component';
import { MovieSingle_Service } from './Services/moviesingle.service';
import {ForgotPasswordService} from "./Services/forgot-password.service";
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HeaderComponent,
    FooterComponent,
    CarouselDivComponent,
    MiddleDivComponent,
    PageNotFoundComponent,
    SeatSelectionComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    OrderHistoryComponent,
    CustomerReviewTemplateComponent,
    MovieShowSelectComponent,
    MovieSingleComponent,
    FilterPipe,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [Order_Service, LoginService, CookieService, MovieSingle_Service , MovieService, SignUpService, ForgotPasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
