
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Order_Service } from '../Services/order.service';
import { order} from '../Models/order';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../Services/movie.service';
import { TheaterService } from '../Services/theater.service';
 
import { ShowTimeService } from '../Services/showtime.service';

import { movie } from '../Models/movie';
import { theater } from '../Models/theater';
import { showTime } from '../Models/showtime';

// import * as jsPDF from 'jspdf';
// import * as html2canvas from 'html2canvas';

// import * as jsPDF from 'jspdf';
// import * as html2canvas from 'html2canvas';

// import { getMaxListeners } from 'cluster';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  orderService: Order_Service;
  theaterService: TheaterService;
 // showTimeService: ShowTimeService;
  //dt = new Date("2016-05-18");
 //console.log(dateSendingToServer);
 
  // model:any =  {
  //   userid: '5cbcc8af30903149581cddd3',
  //   theaterid: '5cba1386317d8d3c1cd402af',
  //   movieid : '5cbba19931c979060d6b0a45',
  //   showtime :'12:00 PM',
  //   seatdetails : 'A5,A6',
  //   totalamount : 40,
  //   creationtime : '12:30PM'

  
  // };
  model;
  movie: movie;
  theater: theater;
  showtime: showTime;
  theatreId: string;
  movieId: string;
  showId: string;
  seatdetails: string;

  @Output() add_pay_invoked = new EventEmitter();

  constructor(public theaterservice: TheaterService,
    public movieservice: MovieService, 
  
    private ac: ActivatedRoute,
    private router:Router) {

   this.theatreId = this.ac.snapshot.params['theatreId'];
   this.movieId = this.ac.snapshot.params['movieId'];
   //this.
   this.seatdetails = this.ac.snapshot.params['seats']

   //get theater-detail
   let theater_d$: Observable<theater> = theaterservice.viewTheaterDetail(this.theatreId);
   theater_d$.subscribe(theater_d => {
     //console.log("Thater Obj" + theater_d);
     this.theater = theater_d;
     console.log(theater_d);
   });

   //get movie-detail
   let movie_d$: Observable<movie> = movieservice.get_single_Movie(this.movieId);
   movie_d$.subscribe(movie_d => {
     console.log(movie_d);
     this.movie = movie_d;
   });
 }
 

  ngOnInit() {
  }

  // downloadAsPDF() {
  //   html2canvas(document.getElementById('col-md-12')).then(function (canvas) {
  //     scale: 2;
  //     dpi: 144;
  //     var img = canvas.toDataURL("image/png");
  //     var doc = new jsPDF();
  //     doc.addImage(img, 'JPEG', 5, 20);
  //     doc.save('movieBookingSummary.pdf');
  //   });
  // }

  onClickPlaceOrder() {
    alert("inside order ");
    let dt = new DatePipe('en-US').transform(this.model.creationtime, 'dd/MM/yyyy');
    //   this.model.CreatedAt = dt;
    let neworder$: Observable<order> = this.orderService.createOrder(this.model);

    //console.log(dt);
    // console.log( this.model.CreatedAt);
    neworder$.subscribe(
      success => { alert("order success") },
      error => {
        //       alert( error);
      });
    this.add_pay_invoked.emit();
  }

  onClickSubmit()
  {
    
  }

}
