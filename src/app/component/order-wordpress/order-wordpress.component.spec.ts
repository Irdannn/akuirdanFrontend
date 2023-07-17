import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWordpressComponent } from './order-wordpress.component';

describe('OrderWordpressComponent', () => {
  let component: OrderWordpressComponent;
  let fixture: ComponentFixture<OrderWordpressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderWordpressComponent]
    });
    fixture = TestBed.createComponent(OrderWordpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
