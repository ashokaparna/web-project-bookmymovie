import { Injectable } from '@angular/core';
import { paymentUrl } from '../Models/paymentUrl';

@Injectable({
  providedIn: 'root'
})

export class DataService {
private pUrl:  paymentUrl;
private userId: String;
private IsSignup :boolean =true;
public isDisplayname:string = "Log In";
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
  setisDisplayname(value:string )
  {
    this.isDisplayname = value;
  }
  getisDisplayname()
  {
    return this.isDisplayname;
  }
  setIsSignup(value:boolean)
  {
    this.IsSignup = value;
  }
  getIsSignup()
  {
    return this.IsSignup;
  }
}
