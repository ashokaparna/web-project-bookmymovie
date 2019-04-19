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
  constructor(public o_service: Order_Service) { 
    let orders$: Observable<Array<order>> = o_service.viewUserOrders('2');
    orders$.subscribe(orders => {
      this.list = orders;
    });

  }

  ngOnInit() {
  }

}
