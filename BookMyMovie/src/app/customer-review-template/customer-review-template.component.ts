import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { review, review_List } from '../Models/review';
import { Review_Service } from '../Services/review.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customer-review-template',
  templateUrl: './customer-review-template.component.html',
  styleUrls: ['./customer-review-template.component.scss']
})
export class CustomerReviewTemplateComponent implements OnInit {
  list: Array<review>;
  reviewService: Review_Service;
  model: any = {};
  @Input() parentData: string;
  @Output() add_invoked = new EventEmitter();
  constructor(reviewService: Review_Service) {
    this.reviewService = reviewService;

  }
  onClickAddReview() {
    let newreview$: Observable<review_List> = this.reviewService.create_Review(this.model);
    newreview$.subscribe(
      success => { alert("success") },
      error => {

      }
    );
    this.add_invoked.emit();
  }


  ngOnInit() {
  }

}
