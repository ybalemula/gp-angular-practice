import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularpracticeComponent } from './angularpractice.component';

describe('AngularpracticeComponent', () => {
  let component: AngularpracticeComponent;
  let fixture: ComponentFixture<AngularpracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularpracticeComponent]
    });
    fixture = TestBed.createComponent(AngularpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
