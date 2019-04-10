import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-track',
  templateUrl: './slider-track.component.html',
  styleUrls: ['./slider-track.component.scss']
})
export class SliderTrackComponent implements OnInit {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/images/pic1.jpg' },
      { name: 'assets/images/pic2.jpg' },
      { name: 'assets/images/pic3.jpg' },
      { name: 'assets/images/pic4.jpg' },
      { name: 'assets/images/pic5.jpg' }
    ]
  }

  ngOnInit() {
  }

}
