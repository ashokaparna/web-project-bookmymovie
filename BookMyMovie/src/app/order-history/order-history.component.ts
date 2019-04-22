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
    console.log(order[0].theaterid);

  }
}
