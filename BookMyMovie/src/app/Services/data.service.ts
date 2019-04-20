import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private userId: String;
  constructor() { }
  setUserId(id: String){
    this.userId = id;
  }
  getUserId(){
    return this.userId;
  }
}
