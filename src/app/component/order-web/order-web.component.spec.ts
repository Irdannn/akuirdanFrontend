import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWebComponent } from './order-web.component';

describe('OrderWebComponent', () => {
  let component: OrderWebComponent;
  let fixture: ComponentFixture<OrderWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderWebComponent]
    });
    fixture = TestBed.createComponent(OrderWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
