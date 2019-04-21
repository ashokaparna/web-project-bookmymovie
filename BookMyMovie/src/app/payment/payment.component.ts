
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Order_Service } from '../Services/order.service';
import { order} from '../Models/order';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
//import * as jsPDF from 'jspdf';
//import * as html2canvas from 'html2canvas';
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
    userid: '5cbcc8af30903149581cddd3',
    theaterid: '5cba1386317d8d3c1cd402af',
    movieid : '5cbba19931c979060d6b0a45',
    showtime :'12:00 PM',
    seatdetails : 'A5,A6',
    totalamount : 40,
    creationtime : '12:30PM'
  };

  @Output() add_pay_invoked = new EventEmitter();

  constructor(orderService: Order_Service) {
    this.orderService = orderService;
  }

  ngOnInit() {
  }

  // downloadAsPDF() {
  //   html2canvas(document.getElementById('col-md-12')).then(function (canvas) {
  //     scale: 2;
  //     var img = canvas.toDataURL("image/png");
  //     var doc = new jsPDF();
  //     doc.addImage(img, 'JPEG', 5, 20);
  //     doc.save('movieBookingSummary.pdf');
  //   });
  // }

  onClickPlaceOrder() {
    alert("inside order ");
    let dt = new DatePipe('en-US').transform(this.model.creationtime, 'dd/MM/yyyy');
    //   this.model.CreatedAt = dt;
    let neworder$: Observable<order> = this.orderService.createOrder(this.model);

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
