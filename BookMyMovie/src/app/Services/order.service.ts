import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { order, order_list} from './../Models/order';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable()
export class Order_Service 

{
orderDbName: string;
orderDbURL: string;
idURL: string;

/**
   * Constructor.
   */
  constructor(private http: HttpClient) 
  {
    this.orderDbName = 'orders';
    this.orderDbURL = `${environment.serverBaseURL}${this.orderDbName}`;
  }

  

 viewUserOrders(_id: string): Observable<order> {
   this.idURL = `${_id}`;
   return this.http.get<order>(`${this.orderDbURL}/${this.idURL}`);
 }

 /**
   * Creates new order.
   *
   * @param  {order_list} order: order_list {new order_list object}
   * @return {Observable<order_list>} {Observable for saved order object}
   */
  createOrder(order: order_list): Observable<order_list> {
   
     let neworder: order_list;
    //  order.O_Id = "101";
    //  order.U_Id = "101";
    //  order.M_Id = "101";
    //  order.C_Date = new Date();
    // // order.C_Date = formatDate(order.C_Date, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    // order.Seats = 4;
    // order.Amount = 1000;
   
    neworder = order ? order : new order_list(order.O_Id, order.U_Id,
    order.M_Id,order.C_Date,order.Seats,order.Amount);
   // alert("Before Post " + neworder.M_Id + neworder.C_Date);
     return this.http.post<order_list>(`${environment.serverBaseURL}${this.orderDbName}`, neworder);
   }
}
