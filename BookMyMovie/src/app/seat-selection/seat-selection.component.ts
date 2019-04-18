import { Component, OnInit } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss']
})
export class SeatSelectionComponent implements OnInit {

  public seats = [];
  model:any = {};
 
  constructor() { 
    
  }
 
  ngOnInit() {
  }

  addchk(data)
  { 
    
    if(this.model.Numseats== undefined)
    {
      alert('Enter Username and number of seats');
      return;
    }
    if(this.seats.length.toString() == this.model.Numseats)
    {
      alert('You can only select '+ this.model.Numseats+ ' seats');
      return;
      
    }  
    this.seats.push(data);
    this.model.seats = this.seats.toString();
    alert(this.seats);
  }
  confirmandpay()
  {
 //TODO:
  }

  

}
