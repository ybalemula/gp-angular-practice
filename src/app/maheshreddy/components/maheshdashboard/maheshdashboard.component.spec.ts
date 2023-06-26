import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaheshdashboardComponent } from './maheshdashboard.component';

describe('MaheshdashboardComponent', () => {
  let component: MaheshdashboardComponent;
  let fixture: ComponentFixture<MaheshdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaheshdashboardComponent]
    });
    fixture = TestBed.createComponent(MaheshdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
