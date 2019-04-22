import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { order } from '../Models/order';
import { Order_Service } from '../Services/order.service';

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

  amount: Number;

  @ViewChild("A5", { read: ElementRef }) tref: ElementRef;

  constructor(public router: Router, public ac: ActivatedRoute, public o_service: Order_Service) {
    this.showId = this.ac.snapshot.params['showId'];
    this.movieId = this.ac.snapshot.params['movieId'];
    this.theatreId = this.ac.snapshot.params['theatreId'];
    this.showtime = this.ac.snapshot.params['showtime'];

  
  }

  ngOnInit() {

    let orders$: Observable<Array<order>> = this.o_service.order_booked_seats(this.theatreId,this.movieId,this.showtime,"");
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
      a.style.setProperty('background-color', 'red');
      //console.log(a);
      this.ab= "";
    }
  }
  }

  addchk(data) {

    if (this.model.Numseats == undefined) {
      alert('Enter Username and number of seats');
      return;
    }
    if (this.seats.length.toString() == this.model.Numseats) {
      alert('You can only select ' + this.model.Numseats + ' seats');
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
    alert();


    this.router.navigate(['/payment', { showId: this.showId, movieId: this.movieId, theatreId: this.theatreId, seats: this.seats, totalseat: this.seats.length }]);

    //TODO:
  }




}
