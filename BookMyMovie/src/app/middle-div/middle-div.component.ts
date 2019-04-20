import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-middle-div',
  templateUrl: './middle-div.component.html',
  styleUrls: ['./middle-div.component.scss']
})
export class MiddleDivComponent implements OnInit {
  id: string;
  constructor(private activatedroute: ActivatedRoute) {
    this.id=this.activatedroute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
