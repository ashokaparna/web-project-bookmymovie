import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselDivComponent } from './carousel-div/carousel-div.component';
import { MiddleDivComponent } from './middle-div/middle-div.component';
import { Order_Service } from './Services/order.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
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
 
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HeaderComponent,
    FooterComponent,
    CarouselDivComponent,
    MiddleDivComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )   //AppRoutingModule
  ],
  providers: [Order_Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
