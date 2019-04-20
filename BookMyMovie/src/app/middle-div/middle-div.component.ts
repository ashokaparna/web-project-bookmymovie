import { Component, OnInit } from '@angular/core';
import { movie } from '../Models/movie';
import { MovieService } from '../Services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-middle-div',
  templateUrl: './middle-div.component.html',
  styleUrls: ['./middle-div.component.scss']
})
export class MiddleDivComponent implements OnInit {

  list: Array<movie>;
  constructor(public movieservice: MovieService) { 
    let movies$: Observable<Array<movie>> = movieservice.get_Movies();
    movies$.subscribe(movies => {
      this.list = movies;
    });

  }

  ngOnInit() {
  }

}
