
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Order_Service } from '../Services/order.service';
import { order_list } from '../Models/order';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
// import * as jsPDF from 'jspdf';
// import * as html2canvas from 'html2canvas';
// import { getMaxListeners } from 'cluster';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  orderService: Order_Service;
  //dt = new Date("2016-05-18");
 //console.log(dateSendingToServer);
 
  model:any =  {
    UserId: '21',
    TheaterName: 'ABC Cinema',
    MovieName : 'x-men',
    ShowTime :'12:00 PM',
    NoOfSeats : 2,
    TotalAmount : 1500,
    CreationTime : '12:30PM'

  };


  @Output() add_pay_invoked = new EventEmitter();

  constructor(orderService: Order_Service) {
    this.orderService = orderService;
  }

  ngOnInit() {
  }

  downloadAsPDF() {
    // html2canvas(document.getElementById('col-md-12')).then(function (canvas) {
    //   scale: 2;
    //   var img = canvas.toDataURL("image/png");
    //   var doc = new jsPDF();
    //   doc.addImage(img, 'JPEG', 5, 20);
    //   doc.save('movieBookingSummary.pdf');
    // });
  }

  onClickPlaceOrder() {
    alert("inside order ");
    let dt = new DatePipe('en-US').transform(this.model.CreatedAt, 'dd/MM/yyyy');
    //   this.model.CreatedAt = dt;
    let neworder$: Observable<order_list> = this.orderService.createOrder(this.model);

    //console.log(dt);
    // console.log( this.model.CreatedAt);
    neworder$.subscribe(
      success => { alert("order success") },
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
