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

  

 viewUserOrders(_id: string): Observable<Array<order>> {
   this.idURL = `${_id}`;
   return this.http.get<Array<order>>(`${this.orderDbURL}/${this.idURL}`);
 }

 /**
   * Creates new order.
   *
   * @param  {order_list} order: order_list {new order_list object}
   * @return {Observable<order_list>} {Observable for saved order object}
   */
  createOrder(order: order_list): Observable<order_list> {
   
     let neworder: order_list;
  
  alert('Inside Create Order - ' + order.Creation_Time);
    neworder = order ? order : new order_list(order.User_Id,
      order.Theater_Name,order.Movie_Name,order.Show_Time,
      order.No_of_seats,order.Total_Amount,order.Creation_Time);
  
// alert("Before Post " + neworder.M_Id + neworder.C_Date);
     return this.http.post<order_list>(`${environment.serverBaseURL}${this.orderDbName}`, neworder);
   }



}