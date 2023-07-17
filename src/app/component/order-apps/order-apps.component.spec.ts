import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAppsComponent } from './order-apps.component';

describe('OrderAppsComponent', () => {
  let component: OrderAppsComponent;
  let fixture: ComponentFixture<OrderAppsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderAppsComponent]
    });
    fixture = TestBed.createComponent(OrderAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
