import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohammadDashboardComponent } from './mohammad-dashboard.component';

describe('MohammadDashboardComponent', () => {
  let component: MohammadDashboardComponent;
  let fixture: ComponentFixture<MohammadDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MohammadDashboardComponent]
    });
    fixture = TestBed.createComponent(MohammadDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
