import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Order_Service} from '../Services/order.service';
import { order_list } from '../Models/order';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  orderService : Order_Service;
 
  model:any =  {
  
    OrderId: '102',
    UserId: '232',
    MovieId: '102',
  CreatedAt : new Date("2016-05-15"),
  NoOfSeats: 5,
  TotalAmount: 750
    
  };

  
  @Output() add_pay_invoked = new EventEmitter();

  constructor(orderService : Order_Service) {
    this.orderService = orderService;}

    ngOnInit() {
    }
    onClickPlaceOrder(){
        alert("inside order ");
       let neworder$: Observable<order_list> = this.orderService.createOrder(this.model);
       console.log(this.model);
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
  