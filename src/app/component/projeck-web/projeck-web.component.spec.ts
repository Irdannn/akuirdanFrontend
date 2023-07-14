import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeckWebComponent } from './projeck-web.component';

describe('ProjeckWebComponent', () => {
  let component: ProjeckWebComponent;
  let fixture: ComponentFixture<ProjeckWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjeckWebComponent]
    });
    fixture = TestBed.createComponent(ProjeckWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
