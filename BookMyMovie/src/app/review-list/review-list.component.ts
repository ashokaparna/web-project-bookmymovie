import { Component, OnInit } from '@angular/core';
import {Review_Service} from "../Services/review.service";

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {

  constructor(private reviewService:  Review_Service) {

  }

  ngOnInit() {
  }

  getReviewListOfAUser(){

  }

  deleteReview(){
    this.reviewService.deleteReviews
  }

}
