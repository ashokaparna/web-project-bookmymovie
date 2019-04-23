import { Component, OnInit } from '@angular/core';
import { MovieSingle_Service } from '../Services/moviesingle.service';
import { showTime } from '../Models/showtime';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from '@angular/core/src/render3/util';
import { movie } from '../Models/movie';
import { MovieService } from '../Services/movie.service';
import {NgbDateStruct, NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import { ValueTransformer } from '@angular/compiler/src/util';
import { SelectorMatcher } from '@angular/compiler';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent implements OnInit {
  dateModel: NgbDate;
  movie: movie;
  list_showtimes: Array<showTime>;
  selectedShowId: string ;
  result: any[];
  movieId: string;
  theatreId: string;
  showtime:string;

  minDate: NgbDate;
  maxDate: NgbDate;


  constructor(private datePipe: DatePipe,public moviesingle_service: MovieSingle_Service, public movieservice: MovieService, private ac: ActivatedRoute,private router:Router, private calendar: NgbCalendar) {

    this.movieId = this.ac.snapshot.params['movieId'];

    //get movie-single
    let movies$: Observable<movie> = movieservice.get_single_Movie(this.movieId);
    movies$.subscribe(movies => {
      console.log(movies);
      this.movie = movies;


    });

    let showtimes$: Observable<Array<showTime>> = this.moviesingle_service.getshowTimes(this.movieId);
    showtimes$.subscribe(showtimes => {

      {
        console.log(showtimes);
        var groups = new Set(showtimes.map(item => item['theatreRef'].theatreName))
        this.result = [];
        groups.forEach(g =>
          this.result.push({
            name: g,
            values: showtimes.filter(i => i['theatreRef'].theatreName === g)
          

          }
          ))
      }
      console.log("groupd");
      console.log(this.result);
      //this.list_showtimes = showtimes;
      // console.log(this.result);
    });

  }

 
  selectShowtime(showid,theatreid,showtime) {
   // alert(showid + '//' + theatreid);
    this.selectedShowId = showid;
    this.theatreId = theatreid;
    this.showtime = showtime;
  }

  ngOnInit() {
    const today = new Date();
     this.maxDate = new NgbDate(today.getFullYear(), today.getMonth(), today.getDate() + 6);
     this.minDate = this.dateModel=new NgbDate(today.getFullYear(), today.getMonth(), today.getDate());

  }
  confirm()
  {
    let date = this.datePipe.transform(`${this.dateModel.month}-${this.dateModel.day}-${this.dateModel.year}`, 'MM-dd-yyyy'); 
    //let date = new Date(`.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
  alert(date);
    if(this.selectedShowId  == undefined)
    {
     alert('please select showtime');
     return;
    }
    this.router.navigate(['/seatselection',{showId:this.selectedShowId,movieId:this.movieId,theatreId:this.theatreId,showtime:this.showtime,date:date}]);

  }

}

