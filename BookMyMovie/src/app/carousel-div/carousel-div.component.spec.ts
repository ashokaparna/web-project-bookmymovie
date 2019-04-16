import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDivComponent } from './carousel-div.component';

describe('CarouselDivComponent', () => {
  let component: CarouselDivComponent;
  let fixture: ComponentFixture<CarouselDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
