import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeckInvComponent } from './projeck-inv.component';

describe('ProjeckInvComponent', () => {
  let component: ProjeckInvComponent;
  let fixture: ComponentFixture<ProjeckInvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjeckInvComponent]
    });
    fixture = TestBed.createComponent(ProjeckInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
