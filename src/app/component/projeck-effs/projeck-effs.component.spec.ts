import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeckEffsComponent } from './projeck-effs.component';

describe('ProjeckEffsComponent', () => {
  let component: ProjeckEffsComponent;
  let fixture: ComponentFixture<ProjeckEffsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjeckEffsComponent]
    });
    fixture = TestBed.createComponent(ProjeckEffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
