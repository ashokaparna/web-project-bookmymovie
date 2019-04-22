import { Component, OnInit } from '@angular/core';
import { MovieSingle_Service } from '../Services/moviesingle.service';
import { showTime } from '../Models/showtime';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from '@angular/core/src/render3/util';
import { movie } from '../Models/movie';
import { MovieService } from '../Services/movie.service';



@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent implements OnInit {
  model;
  movie: movie;
  list_showtimes: Array<showTime>;
  selectedShowId: string;
  result: any[];
  movieId: string;
  theatreId: string;
  isOn: boolean = false;

  constructor(public moviesingle_service: MovieSingle_Service, public movieservice: MovieService, private ac: ActivatedRoute, private router: Router) {

    this.movieId = this.ac.snapshot.params['movieId'];
    this.isOn = false;

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
        var groups = new Set(showtimes.map(item => item.theatreId))
        this.result = [];
        groups.forEach(g =>
          this.result.push({
            name: g,
            values: showtimes.filter(i => i.theatreId === g),

          }
          ))
      }
      console.log("groupd");
      console.log(this.result);
      //this.list_showtimes = showtimes;
      // console.log(this.result);
    });

  }


  selectShowtime(showid, theatreid) {
    // alert(showid + '//' + theatreid);
    this.selectedShowId = showid;
    this.theatreId = theatreid;
  }
  onClickPostReview() {
    this.isOn = true;
  }

  ngOnInit() {
  }
  confirm() {

    if (this.selectedShowId == undefined) {
      alert('please select showtime');
      return;
    }
    this.router.navigate(['/seatselection', { showId: this.selectedShowId, movieId: this.movieId, theatreId: this.theatreId }]);

  }

}
export class NgbdDatepickerPopup {
  model;
}