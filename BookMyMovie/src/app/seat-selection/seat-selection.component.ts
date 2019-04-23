import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { order } from '../Models/order';
import { Order_Service } from '../Services/order.service';
import { CookieService } from 'ngx-cookie-service';
import { paymentUrl } from '../Models/paymentUrl';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss']
})
export class SeatSelectionComponent implements OnInit {
  ab: String;
  public seats = [];
  model: any = {};
  bookedseats: string;
  list: Array<order>;
  movieId: string;
  theatreId: string;
  showId: string;
  showtime: string;
  date: String;
  uncheck: string;
  cookievalue: string = "unknown";
  amount: Number;
  pUrl :paymentUrl = new paymentUrl();

  @ViewChild("A5", { read: ElementRef }) tref: ElementRef;

  constructor(public router: Router,
     public ac: ActivatedRoute, 
     public o_service: Order_Service, 
     public cookieservice: CookieService,
     private dataservice : DataService) {

    this.showId = this.ac.snapshot.params['showId'];
    this.movieId = this.ac.snapshot.params['movieId'];
    this.theatreId = this.ac.snapshot.params['theatreId'];
    this.showtime = this.ac.snapshot.params['showtime'];
    this.date = this.ac.snapshot.params['date'];


  }

  ngOnInit() {

    let orders$: Observable<Array<order>> = this.o_service.order_booked_seats(this.theatreId, this.movieId, this.showtime, this.date);
    orders$.subscribe(orders => {
      this.list = orders;
      console.log(this.list);
      this.disableseats();
    });


  }
  disableseats() {
    for (let j = 0; j < this.list.length; j++) {
      console.log("Test");
      this.ab = this.list[j].seatdetails;
      console.log(this.ab);
      var splitted = this.ab.split(',');
      console.log(splitted);
      for (let i = 0; i < splitted.length; i++) {
        var a = document.getElementById(`${splitted[i]}`);
        a.setAttribute('disabled', 'disabled');
        a.setAttribute('checked', 'true');
        // a.style.setProperty('background-color', 'red');
        //console.log(a);
        this.ab = "";
      }
    }
  }

  addchk(data) {
    alert(data);
    if (this.model.Numseats == undefined) {
      alert('Enter Username and number of seats');
      this.uncheck = data;
      // let na = document.getElementById(`${data}`);
      // na.setAttribute('checked', 'false');
      alert('func1');
      return;
    }
    if (this.seats.length.toString() == this.model.Numseats) {
      alert('You can only select ' + this.model.Numseats + ' seats');
      let za = document.getElementById(`${data}`);
      za.setAttribute('checked', 'false');
      return;
    }
    this.seats.push(data);
    this.amount = (Number(this.amount)) + (Number(20));
    this.model.seats = this.seats.toString();
    alert(this.seats);
    var a = document.getElementById(`${data}`);
    // a.setAttribute('disabled', 'disabled');
    //a.style.removeProperty('background-color');
    a.style.setProperty('border', '3px solid #ff9800');
    console.log(this.amount);
  }
  confirmandpay() {
  
    this.cookievalue = this.cookieservice.get('UserDetails');
    if (this.cookievalue == '') {
      alert('no cookie');
      this.pUrl.showId = this.showId;
      this.pUrl.movieId = this.movieId;
      this.pUrl.theatreId = this.theatreId;
      this.pUrl.seats = this.seats;
      this.pUrl.totalseat = this.seats.length;
      this.pUrl.showtime = this.showtime;
      this.pUrl.date = this.date;
      this.dataservice.setpUrl(this.pUrl);
      
      this.router.navigate(['/login']);

     
      //this.cookieservice.set('seatUrl', );
    }
    else {

      this.router.navigate(['/payment', { showId: this.showId, movieId: this.movieId, theatreId: this.theatreId, seats: this.seats, totalseat: this.seats.length, showtime: this.showtime, date: this.date }]);
    }
    //TODO:
  }

  onChange(isChecked: boolean) {
    alert('func2');
    // let na = document.getElementById(`${this.uncheck}`);
    // na.setAttribute('checked', 'false');
    // alert('after setting attr.');

    // return false;

  }


}
