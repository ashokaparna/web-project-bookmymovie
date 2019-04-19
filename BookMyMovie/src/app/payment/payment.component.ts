import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Order_Service} from '../Services/order.service';
import { order_list } from '../Models/order';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
// import { getMaxListeners } from 'cluster';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  orderService : Order_Service;
  //dt = new Date("2016-05-18");
  
    //console.log(dateSendingToServer);
 

  model:any =  {
    OrderId: '188888',
    UserId: '2',
    MovieId: '140',
  CreatedAt : new Date("2016-05-19"),
  NoOfSeats: 5,
  TotalAmount: 750,
  Email: "deepibm2012@gmail.com"
  };

  
  @Output() add_pay_invoked = new EventEmitter();

  constructor(orderService : Order_Service) {
    this.orderService = orderService;}

    ngOnInit() {
    }
    onClickPlaceOrder(){
        alert("inside order ");
        let dt = new DatePipe('en-US').transform(this.model.CreatedAt, 'dd/MM/yyyy');
     //   this.model.CreatedAt = dt;
       let neworder$: Observable<order_list> = this.orderService.createOrder(this.model);
       
       //console.log(dt);
  // console.log( this.model.CreatedAt);
       neworder$.subscribe(
        success => { alert("order success")},
        error => {
   //       alert( error);
        });  
        this.add_pay_invoked.emit(); 
  }

 /* PlaceOrder(regForm)
  {
    console.log(regForm);
  }*/

  }
  