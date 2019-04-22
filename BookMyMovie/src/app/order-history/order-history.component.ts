import { Component, OnInit } from '@angular/core';
import { order } from '../Models/order';
import { Order_Service } from '../Services/order.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  list: Array<order>;
  model;
  showtime:string;
  theatername:string;
  moviename:string;
  seatdetails:string;
  totalamount:string;
  bookingtime:string;
  order_d: order;

  constructor(public o_service: Order_Service) { 
    let orders$: Observable<Array<order>> = 
    o_service.viewUserOrders('5cbcc89130903149581cddd2');
    orders$.subscribe(orders => {
      this.list = orders;
      console.log(this.list);
     // console.log(this.list[0].);
    });

  }

  ngOnInit() {
  }

  onClickDetail(orderd)
  {

    console.log(orderd);
    this.showtime=orderd.showtime;
    this.moviename=orderd.movieRef.movieName
    this.theatername = orderd.theaterRef.theatreName;
    this.seatdetails = orderd.seatdetails;
    this.totalamount = orderd.totalamount;
    this.bookingtime = orderd.creationtime;
   // this.theatername=orderd. 
    console.log(order[0].theaterid);

  }
}
