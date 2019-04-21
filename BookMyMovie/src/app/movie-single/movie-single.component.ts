import { Component, OnInit } from '@angular/core';
import { MovieSingle_Service } from '../Services/moviesingle.service';
import { showTime } from '../Models/showtime';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent implements OnInit {
  model;
  list_showtimes: Array<showTime>;
  movieName: string = "Tarzan";
  result:any[];
  constructor(public moviesingle_service: MovieSingle_Service) {

    let showtimes$: Observable<Array<showTime>> = this.moviesingle_service.getSinglemovie(this.movieName);
    showtimes$.subscribe(showtimes => {
      
      {
        var groups = new Set(showtimes.map(item => item.theatreName)) 
        this.result = [];
        groups.forEach(g => 
          this.result.push({
            name: g, 
            values: showtimes.filter(i => i.theatreName === g)
          }
        ))
      }

      this.list_showtimes = showtimes;
      console.log(this.result);
    });

  }
  toArray(values: object) {
    return Object.keys(values).map(key => values[key])
  }

  ngOnInit() {
  }

}
export class NgbdDatepickerPopup {
  model;
}