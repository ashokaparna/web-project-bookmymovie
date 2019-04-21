import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss']
})
export class SeatSelectionComponent implements OnInit {
  ab: String;

  public seats = [];
  model: any = {};
  bookedseats: string = "A5,A7";

  @ViewChild("A5", { read: ElementRef }) tref: ElementRef;

  constructor(@Inject(DOCUMENT) document1) {
    //  this.A5.
  }

  ngOnInit() {
    this.ab = "A5,A7,A2,A3";
    var splitted = this.ab.split(',');
    console.log(splitted);
    for (var i = 0; i <= splitted.length; i++) {
      var a = document.getElementById(`${splitted[i]}`);
      a.setAttribute('disabled', 'disabled');
      a.style.removeProperty('background-color');
      a.style.setProperty('background-color', 'red');
      console.log(a);
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
    this.model.seats = this.seats.toString();
    alert(this.seats);
    var a = document.getElementById(`${data}`);
   // a.setAttribute('disabled', 'disabled');
    //a.style.removeProperty('background-color');
    a.style.setProperty('border', '3px solid #ff9800');
    console.log(a);
  }
  confirmandpay() {

   
    //TODO:
  }




}
