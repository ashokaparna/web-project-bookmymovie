import { Injectable } from '@angular/core';
import { paymentUrl } from '../Models/paymentUrl';

@Injectable({
  providedIn: 'root'
})

export class DataService {
private pUrl:  paymentUrl;
private userId: String;
  constructor() { }
  setUserId(id: String){
    this.userId = id;
  }
  getUserId(){
    return this.userId;
  }
  setpUrl(pUrl: paymentUrl){
    this.pUrl = pUrl;
  }
  getpUrl(){
    return this.pUrl;
  }
}
